import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { AuthenticationCallbackActivateGuard } from './AuthenticationCallbackActivateGuard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthenticationCallbackActivateGuard]},  
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [
  AuthenticationCallbackActivateGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);