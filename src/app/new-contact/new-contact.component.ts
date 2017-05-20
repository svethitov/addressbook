import { Component, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

import { Contact } from '../data/contact';
import { ContactService } from '../data/contact.service';

@Component({
    selector: 'new',
    templateUrl: './new-contact.component.html'
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

    childAdded(event) {
        this.goBack();
    }

}