import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // loadChildren: () => import('./home/home.module.ngfactory').then((m) => m.HomeModuleNgFactory),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    // loadChildren: () => import('./login/login.module.ngfactory').then((m) => m.LoginModuleNgFactory),
  },
  {
    path: 'register',
    component: RegisterComponent,
    // loadChildren: () => import('./register/register.module.ngfactory').then((m) => m.RegisterModuleNgFactory),
  },

  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
