import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { routing } from './logout.routing';

@NgModule({
  imports: [
    routing
  ]
})
export default class LogoutModule {
  constructor(private router: Router) {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');

    // Navigate to login route
    this.router.navigate(['/login']);
  }
}
