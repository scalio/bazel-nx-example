import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards';

import { LoginComponent } from './login';

export const routes: Routes = [
  {
    path: 'home',
    // component: HomeComponent,
    // loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    loadChildren: 'app/home/home.module#HomeModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    // component: RegisterComponent,
    // loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule),
    loadChildren: 'app/register/register.module#RegisterModule',
  },

  { path: '**', redirectTo: '/login' },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
