import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { HomeComponent } from './components/home/home.component';


import { Router } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HttpClientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
