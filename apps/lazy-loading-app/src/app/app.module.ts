import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AlertComponent } from './components';
import { LoginComponent } from './login';

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
