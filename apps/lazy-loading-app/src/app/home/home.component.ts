import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

import { User } from '../models';
import { AuthenticationService } from '../services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    cats: Observable<any>;

  constructor(
        private authenticationService: AuthenticationService,
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe((user) => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
      this.loadAllCats();
    }

    ngOnDestroy() {
        this.currentUserSubscription.unsubscribe();
    }

    private loadAllCats() {
      this.cats = of([{
        id: 1,
        name: 'qeq',
        age: 10,
      }]);
    }
}
