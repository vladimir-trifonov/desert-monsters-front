import { tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loggedIn() {
    return tokenNotExpired();
  }

  saveSlackToken(token) {
    localStorage.setItem('slack_token', token);
  }

  getSlackToken() {
    return localStorage.getItem('slack_token');
  }

  deleteSlackToken() {
    localStorage.removeItem('slack_token');
    return true;
  }

  saveAuth(token, profile) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  deleteAuth() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}