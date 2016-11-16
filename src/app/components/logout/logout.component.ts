import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { LogoutService } from './logout.service';

@Component({
  selector: 'logout',
  styles: [require('./logout.scss')],
  template: require('./logout.html'),
  providers: [ // expose our Services and Providers into Angular's dependency injection
    LogoutService
  ]
})
export class Logout {
  constructor(private router: Router, private authService: AuthService, private logoutService: LogoutService) {
    this.authService.deleteAuth();
    // Navigate to login route

    logoutService.Logout(
      () => {
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      (error: any): void => console.log(error)
    );
  }
}
