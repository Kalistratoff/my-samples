import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { AlertComponent } from './components/alert/alert.component';
import { GridComponent } from './components/grid/grid.component';
import { FlexComponent } from './components/flex/flex.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'http', component: HttpClientComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'grid', component: GridComponent },
  { path: 'flex', component: FlexComponent },
  { path: 'auth', component: AuthenticationComponent }

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const Router: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });