import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.component';
import { AuthGuardService } from '../../auth';

const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    canActivate: [AuthGuardService]
  }
];

export const routing = RouterModule.forChild(routes);
