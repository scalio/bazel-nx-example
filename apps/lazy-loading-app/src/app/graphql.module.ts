import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

export function createApollo(httpLink: HttpLink) {
  const http = httpLink.create({uri: '/graphql'});
  const auth = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const { token } = JSON.parse(localStorage.getItem('currentUser'));
    // return the headers to the context so httpLink can read them
    // in this example we assume headers property exists
    // and it is an instance of HttpHeaders
    if (!token) {
      return {};
    } else {
      return {
        headers: { Authorization: `Bearer ${token}` },
      };
    }
  });
  return {
    link: auth.concat(http),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
