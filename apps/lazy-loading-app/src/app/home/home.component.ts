import { Component, OnDestroy, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { Cat, User } from '../models';
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
        // this.loadAllUsers();
      this.cats = this.apollo
        .watchQuery({
          query: GET_CATS,
        })
        .valueChanges.pipe(map((result) => result.data));
      // this.cats.subscribe((val) => console.log(JSON.stringify(val)));
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            // this.loadAllUsers();
        });
    }

    // private loadAllUsers() {
    //     this.userService.getAll().pipe(first()).subscribe((users) => {
    //         this.cats = users;
    //     });
    // }
}
