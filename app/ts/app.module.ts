/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';

import { routing,
         appRoutingProviders } from './app.routes';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { PathLocationStrategy, LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ AUTH_PROVIDERS,
                  { 
                    provide: LocationStrategy,
                    useClass: PathLocationStrategy 
                  }
                ]
})
export class AppModule { }