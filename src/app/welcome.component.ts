import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdalService } from 'ng2-adal/core';

@Component({
    selector: 'welcome',
    template: '<h1>Welcome!</h1><button (click)="logIn()">Login</button>'
})
export class WelcomeComponent implements OnInit {
    constructor(
        private router: Router,
        private adalService: AdalService
    ) {
        this.adalService.getUser();
        if (this.adalService.userInfo.isAuthenticated) {
            this.router.navigate(['/contacts']);
        }
    }

    public ngOnInit() {
        if (this.adalService.userInfo.isAuthenticated) {
            this.router.navigate(['/contacts']);
        }
    }

    public logIn() {
        this.adalService.login();
        console.log('name' + this.adalService.userInfo.userName);
    }

    public logOut() {
        this.adalService.logOut();
    }
}