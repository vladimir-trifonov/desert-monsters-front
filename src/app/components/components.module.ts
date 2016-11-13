import { NgModule } from '@angular/core';

import { Auth, AuthGuard } from './auth';
import { routing } from './components.routing';

@NgModule({
  imports: [routing],
  providers: [Auth, AuthGuard]
})
export class ComponentsModule {
}
