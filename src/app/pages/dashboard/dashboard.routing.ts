import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.component';
import { AuthGuardService } from '../../components/auth';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ], 
    canActivate: [AuthGuardService]
  }
];

export const routing = RouterModule.forChild(routes);
