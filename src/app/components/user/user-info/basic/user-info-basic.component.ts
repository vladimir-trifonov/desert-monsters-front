import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'user-info-basic',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./user-info-basic.scss')],
  template: require('./user-info-basic.html')
})
export class UserInfoBasic {
  private profile;
  constructor(private authService: AuthService) {
    this.profile = this.authService.getUserProfile();
  }
}
