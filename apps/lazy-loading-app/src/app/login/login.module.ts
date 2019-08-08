import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: LoginComponent}]),
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule { }
