import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { AuthenticationCallbackActivateGuard } from './AuthenticationCallbackActivateGuard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/login'}
  //{ path: '**', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthenticationCallbackActivateGuard] }
];

export const appRoutingProviders: any[] = [
  AuthenticationCallbackActivateGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);