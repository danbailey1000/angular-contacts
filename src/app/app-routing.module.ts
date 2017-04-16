import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { ContactDetailComponent } from './contact-detail.component';
import { WelcomeComponent } from './welcome.component';
import { LoggedInGuard } from "./logged-in.guard";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'contacts/:id', component: ContactDetailComponent, canActivate: [LoggedInGuard] },
    { path: 'contacts', component: ContactsComponent, canActivate: [LoggedInGuard] },
    { path: 'login', component: WelcomeComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
