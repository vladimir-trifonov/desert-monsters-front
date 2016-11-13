import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Router } from '@angular/router';
import { Login } from './login.component';
import { routing } from './login.routing';

import { Auth } from '../auth/auth.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Login
  ]
})
export default class LoginModule {
  constructor(private auth: Auth, private router: Router) {
    if (this.auth.loggedIn()) {
      this.router.navigate(['/']);
    }
  }
}
