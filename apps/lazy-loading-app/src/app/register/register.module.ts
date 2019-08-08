import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([{path: '', component: RegisterComponent}]),
  ],
  declarations: [RegisterComponent],
})
export class RegisterModule { }
