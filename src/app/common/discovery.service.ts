import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DiscoveryService {

  constructor(private http: Http) { }

  getServiceUrl(name, nextCb: Function, errCb: Function) {
    this.http.get(`http://desertmonstersserviceregistry-93127.onmodulus.net/registrations/${name}`)
      .map(res => res.json())
      .subscribe(
      data => {
        if (!data || !data.length) {
          return errCb(data.reason || 'No service');
        }

        nextCb(data[0].meta.url);
      },
      err => console.log(err)
      );
  }

}