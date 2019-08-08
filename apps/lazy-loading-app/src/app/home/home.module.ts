import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CatsService } from './cats.service';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: HomeComponent}]),
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [HomeComponent],
  providers: [CatsService],
})
export class HomeModule { }
