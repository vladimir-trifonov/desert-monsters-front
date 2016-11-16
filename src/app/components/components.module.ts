import { NgModule } from '@angular/core';

import { AuthService, AuthGuardService } from './auth';
import { routing } from './components.routing';

@NgModule({
  imports: [routing],
  providers: [AuthService, AuthGuardService]
})
export class ComponentsModule {
}
