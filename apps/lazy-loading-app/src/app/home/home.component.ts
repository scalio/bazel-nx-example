import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models';
import { AuthenticationService, UserService } from '../services';

const GET_CATS = gql`
{
  getCats {
    id
    name
    age
  }
}`;

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    cats: Observable<any>;

  constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private apollo: Apollo,
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
      this.cats = this.apollo
        .watchQuery({
          query: GET_CATS,
        })
        .valueChanges.pipe(map((result) => result.data));
    }
}
