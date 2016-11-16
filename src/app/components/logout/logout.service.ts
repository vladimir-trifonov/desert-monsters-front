import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class LogoutService {

  constructor(private http: Http, private authService: AuthService) { }

  Logout(nextCb: Function, errCb: Function) {
    this.http.get(`https://slack.com/api/auth.revoke?token=${this.authService.getSlackToken()}`)
      .map(res => res.json())
      .subscribe(
      data => this.authService.deleteSlackToken() && nextCb(),
      err => errCb(err)
      );
  }
}