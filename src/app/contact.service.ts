import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {
    constructor(private http: Http) { }
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private contactsUrl = 'http://contactsapplication.azurewebsites.net/api/contacts';  // URL to web api

    getContacts(): Promise<Contact[]> {
        return this.http.get(this.contactsUrl, { headers: new Headers({ 'Accept': 'application/json' }) })
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
        return this.http.get(url, { headers: new Headers({ 'Accept': 'application/json' }) })
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
            .toPromise().then(res => contact)
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