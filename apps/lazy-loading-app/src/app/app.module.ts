import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AlertComponent } from './components';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    routing,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
