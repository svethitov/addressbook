import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Contact } from '../data/contact';
import { ContactService } from '../data/contact.service';

@Component({
    selector: 'new',
    templateUrl: './new-contact.component.html',
    styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {
    private contacts: Contact[];

    constructor(
        private location: Location,
        private contactService: ContactService
    ) {
        this.contacts = this.contactService.getContacts();
    }

    goBack(): void {
        this.location.back();
    }

    newContact(firstName: string, lastName: string, address: string, mobile: string): void {
        this.contactService.addContact({
            id: this.contacts.length + 1,
            firstName: firstName,
            lastName: lastName,
            address: address,
            mobile: mobile
        });
        this.goBack();
    }
}