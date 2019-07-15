import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AlertComponent } from './components';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login';
import { RegisterModule } from './register/register.module';

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
    HomeModule,
    RegisterModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
