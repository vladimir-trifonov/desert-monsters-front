import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'pages',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('../pages/dashboard/dashboard.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
