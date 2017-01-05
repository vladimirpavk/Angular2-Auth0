/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'login',
  template: `<button (click)="auth.login()">Login</button>
             <button (click)="auth.logout()">Logout</button>
  `,
  providers: [ AuthService ]
})
export class LoginComponent{

  constructor(private auth: AuthService){

  }


}