import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './_models';
import { AuthenticationService } from './_services';

@Component({ selector: 'lazy-root', templateUrl: 'app.component.html' })
export class AppComponent {
  currentUser: User;

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
