import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'pages',
    component: Layout,
    children: [
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('../pages/dashboard/dashboard.module') },
      { path: 'blog', loadChildren: () => System.import('../pages/blog-view/blog-view.module') },
      { path: 'forum', loadChildren: () => System.import('../pages/forum-view/forum-view.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
