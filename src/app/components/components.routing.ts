import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'logout',
    loadChildren: () => System.import('./logout/logout.module')
  }
];

export const routing = RouterModule.forChild(routes);
