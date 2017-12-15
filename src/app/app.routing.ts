import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { HttpClientComponent } from './components/http-client/http-client.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'http', component: HttpClientComponent }

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const Router: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });