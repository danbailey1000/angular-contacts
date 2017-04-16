import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactsComponent } from './contacts.component';
import { ContactService } from './contact.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryContactService } from './in-memory-contact.service';

import { AdalService } from 'ng2-adal/core';
import { SecretService } from './secret.service';
import { WelcomeComponent } from './welcome.component';
import { LoggedInGuard } from "./logged-in.guard";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactsComponent,
    WelcomeComponent
  ],
  providers: [
    ContactService,
    AdalService,
    SecretService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}