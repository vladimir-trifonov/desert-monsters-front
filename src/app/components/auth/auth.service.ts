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

  getUserProfile() {
    return JSON.parse(localStorage.getItem('profile'));
  }

  getUserName() {
    return JSON.parse(localStorage.getItem('profile')).name;
  }

  getUserAvatar() {
    return JSON.parse(localStorage.getItem('profile')).avatar;
  }

  getUserID() {
    return JSON.parse(localStorage.getItem('profile')).id;
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