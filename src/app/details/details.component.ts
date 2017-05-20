import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'; 

import 'rxjs/add/operator/switchMap';

import { Contact } from '../data/contact';
import { ContactService } from '../data/contact.service';

@Component({
    selector: 'detail',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    private contact: Contact;

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        let detailsParams: Params;
        this.route.params.subscribe((params: Params) => detailsParams = params);
        this.contact = this.contactService.getContact(+detailsParams['id'])
    }

    goBack(): void {
        this.location.back()
    }
}