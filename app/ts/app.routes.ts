import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';


const appRoutes: Routes = [
  { path: '/login', component: LoginComponent },
  { path: '/', redirectTo: '/login' },
  { path: '/home', component: HomeComponent, pathMatch: 'full' } 
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);