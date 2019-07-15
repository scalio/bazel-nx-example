import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    // loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule),
  },

  { path: '**', redirectTo: '/login' },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
