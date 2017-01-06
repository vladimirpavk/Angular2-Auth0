/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a routerLink="/home" routerLinkActive="active">Home</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers: [ RouterModule ]
})
export class AppComponent implements OnInit{

  private title: string;

  constructor(){

  }

  ngOnInit(){
     this.title="Application Component";
  }


}