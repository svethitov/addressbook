﻿import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class StaticDataSource {
    private contacts: Contact[] =[
        { id: 1, firstName: 'Svetomir', lastName: 'Hitov', email: 'svethitov@hotmail', address: 'Denmark', mobile: '888888' },
        { id: 2, firstName: 'Radoslav', lastName: 'Ivanov', email: 'rivanov@gmail.com',  address: 'USA', mobile: '282828' },
        { id: 3, firstName: 'Ivan', lastName: 'Ivanov', address: 'Texas', mobile: '989898'}
    ];

    getContacts(): Observable<Contact[]> {
        return Observable.from([this.contacts]);
    }
}
