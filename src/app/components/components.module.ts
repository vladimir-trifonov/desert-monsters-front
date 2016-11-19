import { NgModule } from '@angular/core';

import { AuthService, AuthGuardService } from './auth';
import { routing } from './components.routing';

import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    routing,
    LayoutModule
  ],
  providers: [AuthService, AuthGuardService]
})
export class ComponentsModule {
}
