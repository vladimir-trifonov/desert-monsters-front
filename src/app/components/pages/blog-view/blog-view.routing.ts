import { Routes, RouterModule }  from '@angular/router';

import { BlogView } from './blog-view.component';
import { AuthGuardService } from '../../auth';

const routes: Routes = [
  {
    path: '',
    component: BlogView,
    canActivate: [AuthGuardService]
  }
];

export const routing = RouterModule.forChild(routes);
