import { Routes, RouterModule }  from '@angular/router';

import { ForumView } from './forum-view.component';
import { AuthGuardService } from '../../auth';

const routes: Routes = [
  {
    path: '',
    component: ForumView,
    canActivate: [AuthGuardService]
  }
];

export const routing = RouterModule.forChild(routes);
