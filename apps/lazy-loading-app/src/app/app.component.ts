import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignedUser } from '@app/api-interface';

import { AuthenticationService } from './auth/authentication.service';

@Component({ selector: 'lazy-root', templateUrl: 'app.component.html' })
export class AppComponent {
  currentUser: SignedUser;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe((x) => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
