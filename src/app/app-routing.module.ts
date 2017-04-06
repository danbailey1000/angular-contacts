import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { ContactDetailComponent } from './contact-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: 'detail/:id', component: ContactDetailComponent },
    { path: 'contacts', component: ContactsComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }