import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { StaticDataSource } from './static-data-source';

@Injectable()
export class ContactService {
    private contacts: Contact[];
    private nextId: number;

    constructor(private dataSource: StaticDataSource) {
        dataSource.getContacts().subscribe(
            data => {
                this.contacts = data;
            }
        );
        this.nextId = this.contacts.length;
    }
    
    getContacts(): Contact[] {
        return this.contacts;
    }

    getContact(id: number): Contact {
        return this.contacts.find( contact => contact.id === id );
    }

    addContact(contact: Contact) {
        this.contacts.push(contact);
        this.nextId++;
    }

    getNextId(): number {
        return this.nextId
    }

    removeContact(id: number): void {
        let index = this.contacts.findIndex( contact => contact.id === id);
        this.contacts.splice(index, 1);
    }
}
