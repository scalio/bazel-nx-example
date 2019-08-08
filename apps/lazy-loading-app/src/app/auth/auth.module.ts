import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [AuthGuard, AuthenticationService],
})
export class AuthModule {}
