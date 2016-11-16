import { NgModule } from '@angular/core';
import { routing } from './logout.routing';

import { Logout } from './logout.component';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    Logout
  ]
})
export default class LogoutModule {}
