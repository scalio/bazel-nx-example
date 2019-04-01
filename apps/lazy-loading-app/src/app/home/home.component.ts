import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cat, User } from '../models';
import { AuthenticationService } from '../services';

const GET_CATS = gql`
query Cats {
  getCats {
    id
    name
    age
  }
}`;

interface Response {
  getCats: Cat[];
}

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    cats: Observable<any>;

  constructor(
        private authenticationService: AuthenticationService,
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
        .watchQuery<Response>({
          query: GET_CATS,
        })
        .valueChanges.pipe(map(({ data }) => data.getCats));
    }
}
