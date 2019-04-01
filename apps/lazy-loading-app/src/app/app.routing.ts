import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards';
import { HomeComponent } from './home';

// import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
// import { RegisterComponent } from './register';
// import { AuthGuard } from './guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);
