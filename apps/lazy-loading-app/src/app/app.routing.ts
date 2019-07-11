import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards';

import { LoginComponent } from './login';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
  },

  { path: '**', redirectTo: '/login' },
];

export const routing = RouterModule.forRoot(appRoutes);
