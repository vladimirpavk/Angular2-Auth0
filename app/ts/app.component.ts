/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'my-app',
  //templateUrl: './app/ts/app.component.html',
  template: `<button (click)="auth.login()">Login</button>"`,
  providers: [ AuthService ]
})
export class AppComponent{

  constructor(private auth: AuthService){

  }


}