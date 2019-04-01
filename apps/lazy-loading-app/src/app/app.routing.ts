import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards';

import { LoginComponent } from './login';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule',
  },

  { path: '**', redirectTo: '/login' },
];

export const routing = RouterModule.forRoot(appRoutes);
