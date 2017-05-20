import { Component, OnInit } from '@angular/core';

import { Contact } from '../data/contact';
import { ContactService } from '../data/contact.service';

@Component({
    selector: 'contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    private contacts: Contact[];
    private selectedContact: Contact;

    constructor(
        private contactService: ContactService
        ) { }

    getContacts(): void {
        this.contacts = this.contactService.getContacts().sort((left: Contact, right: Contact): number => {
                if (left.lastName > right.lastName) return 1;
                if (left.lastName < right.lastName) return -1;
                return 0;
            });
    }

    onSelect(contact: Contact): void {
        this.selectedContact = contact;
    }

    ngOnInit(): void {
        this.getContacts();
    }

}