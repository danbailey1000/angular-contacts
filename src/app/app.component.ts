import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/core';
import { SecretService } from './secret.service';
import { ContactsComponent } from './contacts.component';

@Component({
    selector: 'app-root',
    template: `
   <h1>{{title}}</h1>
   <router-outlet></router-outlet>
 `
})

export class AppComponent implements OnInit {
    title = 'Contacts';
    constructor(
        private adalService: AdalService,
        private secretService: SecretService
    ) {
    }
    ngOnInit(): void {
        this.adalService.init(this.secretService.adalConfig);
        this.adalService.handleWindowCallback();
        this.adalService.getUser();
    }
}
