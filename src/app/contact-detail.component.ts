// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from './contact.service';
import { Contact } from './contact';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input() contact: Contact;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.contactService.getContact(+params['id']))
      .subscribe(contact => this.contact = contact);
  }

  save(): void {
    this.contactService.update(this.contact);
  }
}

