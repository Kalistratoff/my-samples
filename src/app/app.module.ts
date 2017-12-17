import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './components/alert/alert.component';
import { GridComponent } from './components/grid/grid.component';
import { FlexComponent } from './components/flex/flex.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import { AlertService } from './services/alert.service';
import { AuthenticationComponent } from './components/authentication/authentication.component';

// ANGULARFIRE
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';


import { Router } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HttpClientComponent,
    HomeComponent,
    AlertComponent,
    GridComponent,
    FlexComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    Router
  ],
  providers: [
    AlertService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
