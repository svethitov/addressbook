import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Contact } from '../data/contact';
import { ContactService } from '../data/contact.service'

@Component({
    selector: 'contact-form',
    templateUrl: './form.component.html',
    styleUrls: ['form.component.css']
})
export class FormComponent {
    private contacts: Contact[];
    private modelContact: Contact;
    @Output() completed: EventEmitter<number> = new EventEmitter();
    private newContact: boolean;

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute
        ) {
        this.contacts = contactService.getContacts();

        let detailsParams: Params;
        this.route.params.subscribe((params: Params) => detailsParams = params);
        if (detailsParams['id']) {
            this.modelContact = Object.assign({}, this.contactService.getContact(+detailsParams['id']) ) 
            this.newContact = false;
        } else {
            this.modelContact = {
                id: this.contactService.getNextId(),
                firstName: '',
                lastName: '',
                address: '',
                mobile: ''
            }
            this.newContact = true;
        }
    }

    onSubmit() {
        if (!this.newContact) {
            this.contactService.removeContact(this.modelContact.id);
        } 
        this.contactService.addContact(this.modelContact);

        this.completed.emit(0);
    }

}
