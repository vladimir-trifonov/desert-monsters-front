import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Login } from './login.component';
import { routing } from './login.routing';

@NgModule({
  imports: [
    routing,
    CommonModule
  ],
  declarations: [
    Login
  ]
})
export default class LoginModule {}
