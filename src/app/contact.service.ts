import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AdalService } from 'ng2-adal/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {
    constructor(private http: Http, private adalService: AdalService) { }
    private headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +
        this.adalService.getCachedToken('4fb4f3c4-23b1-4e2f-a3b1-a79698310dc0')
    });
    private contactsUrl = 'https://contactsapplication.azurewebsites.net/api/contacts';  // URL to web api

    getContacts(): Promise<Contact[]> {
        return this.http.get(this.contactsUrl, { headers: this.headers })
            .toPromise()
            .then(response => {
                var result = response.json();
                if (result.data != null) result = result.data;
                return result as Contact[];
            })
            .catch(this.handleError);
    }

    getContact(id: number): Promise<Contact> {
        const url = `${this.contactsUrl}/${id}`;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => {
                var result = response.json();
                if (result.data != null) result = result.data;
                console.log("response", result);
                return result as Contact;
            })
            .catch(this.handleError);
    }

    update(contact: Contact): Promise<Contact> {
        const url = `${this.contactsUrl}/${contact.id}`;
        return this.http
            .put(url, JSON.stringify(contact), { headers: this.headers })
            .toPromise()
            .then(() => contact)
            .catch(this.handleError);
    }

    create(contact: Contact): Promise<Contact> {
        return this.http
            .post(this.contactsUrl, JSON.stringify(contact), { headers: this.headers })
            .toPromise().then((res) => contact)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.contactsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}