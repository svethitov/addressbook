import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { StaticDataSource } from './static-data-source';

@Injectable()
export class ContactService {
    private contacts: Contact[];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getContacts().subscribe(
            data => {
                this.contacts = data;
            }
        );
    }
    
    getContacts(): Contact[] {
        return this.contacts;
    }

    getContact(id: number): Contact {
        return this.contacts.find( contact => contact.id === id );
    }

    addContact(contact: Contact) {
        this.contacts.push(contact);
    }
}
