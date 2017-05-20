import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Contact } from '../data/contact';
import { ContactService } from '../data/contact.service'

@Component({
    selector: 'contact-form',
    templateUrl: './form.component.html'
})
export class FormComponent {
    private contacts: Contact[];
    private modelContact: Contact;

    constructor(private contactService: ContactService) {
        this.contacts = contactService.getContacts();
        this.modelContact = {
            id: this.contacts.length,
            firstName: 'First Name',
            lastName: 'Last Name',
            address: 'Address',
            mobile: 'mobile'
        }
    }

    submitted = false;

    onSubmit() { this.submitted = true;}

    get diagnostic() { return JSON.stringify(this.modelContact); }

}
