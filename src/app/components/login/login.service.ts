import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { DiscoveryService } from '../../common/discovery.service';

@Injectable()
export class LoginService {

  constructor(private http: Http, private authService: AuthService, private discoverService: DiscoveryService) { }

  login(code: string, nextCb: Function, errCb: Function): void {
    this.http.get(`https://slack.com/api/oauth.access?client_id=94967931141.104285476880&client_secret=a3fa7643a3a41e531b9e5d6bad872b90&code=${code}`)
      .map(res => res.json())
      .subscribe(
      data => data && data.ok && this.getAuthToken(data.access_token, nextCb, errCb),
      err => errCb(err)
      );
  }

  getAuthToken(token: string, nextCb: Function, errCb: Function) {
    this.authService.saveSlackToken(token);
    this.http.get(`https://slack.com/api/users.identity?token=${token}`)
      .map(res => res.json())
      .subscribe(
      data => data && data.ok && this.signIn(data.user.id, nextCb, errCb),
      err => errCb(err)
      );
  }

  signIn(slackId: string, nextCb: Function, errCb: Function) {
    this.discoverService.getServiceUrl('desert-monsters-auth-service',
      (url) => {
        this.http.post(`http://${url}/authenticate`, {
          slack_id: slackId
        })
          .map(res => res.json())
          .subscribe(
          data => {
            if (!data || !data.ok) {
              return errCb(data.reason || 'Cannot login');
            }

            this.authService.saveAuth(data.token, data.profile);
            nextCb();
          },
          err => console.log(err)
          );
      },
      err => console.log(err)
    )
  }
}