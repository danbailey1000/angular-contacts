import { Component } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'my-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css'],
    providers: []
})

export class ContactsComponent implements OnInit {
    constructor(private contactService: ContactService) { }
    selectedContact: Contact;
    contacts = Contact[0];
    onSelect(contact: Contact): void {
        this.selectedContact = contact;
    }

    getContacts(): void {
        this.contactService.getContacts().then(contacts => this.contacts = contacts);
    }

    ngOnInit(): void {
        this.getContacts();
    }

    add(id: string, firstName: string, lastName: string, telNo: string): void {
        if (!id) { return; }
        if (!firstName) { return; }
        if (!lastName) { return; }
        if (!telNo) { return; }
        var contact = new Contact();
        contact.id = +id;
        contact.firstName = firstName;
        contact.lastName = lastName;
        contact.telNo = telNo;

        this.contactService.create(contact)
            .then(contact => {
                this.contacts.push(contact);
                this.selectedContact = null;
            });
    }

    delete(contact: Contact): void {
        this.contactService
            .delete(contact.id)
            .then(() => {
                this.contacts = this.contacts.filter(c => c !== contact);
                if (this.selectedContact === contact) { this.selectedContact = null; }
            });
    }
}

