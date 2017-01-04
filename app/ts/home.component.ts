import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    template:`
        <h1 *ngIf="auth.authenticated()">You are loged in</h1>
        <h1 *ngIf="!auth.authenticated()">You are not loged in</h1>

    `
})
export class HomeComponent{

    constructor(auth: AuthService){}

}