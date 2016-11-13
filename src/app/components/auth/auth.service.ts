import { tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';

@Injectable()
export class Auth {

  constructor() { }

  loggedIn() {
    return tokenNotExpired();
  }
}