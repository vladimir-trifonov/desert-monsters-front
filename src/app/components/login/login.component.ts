import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth/auth.service';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
  providers: [ // expose our Services and Providers into Angular's dependency injection
    LoginService
  ]
})
export class Login implements OnInit, OnDestroy {
  code: string;
  state: string;
  
  loaded:boolean = true;
  busy: boolean = false;

  private sub: any;

  constructor(fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute, private loginService: LoginService) {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(
      (params) => {
        if (params['state'] === 'login') {
          this.busy = true;
          // Login
          this.loginService.login(
            params['code'],
            () => this.router.navigate(['pages/dashboard']),
            (error: any): void => {
              this.busy = false;
              console.log(error)
            }
          );

        }
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
