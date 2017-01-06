import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector:'home',
    template:`
        <h1>Home component</h1>
        <h1 *ngIf="_auth.authenticated()">You are loged in</h1>
        <h1 *ngIf="!_auth.authenticated()">You are not loged in</h1>
    `,
    providers: [ AuthService ]
})
export class HomeComponent implements OnInit{

    private _auth: AuthService;

    constructor(auth: AuthService){
        this._auth=auth;        
    }

    ngOnInit(){
        console.log(this._auth.authenticated());
    }

}