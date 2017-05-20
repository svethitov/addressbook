import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: 'contacts', component: ContactsComponent},
    { path: 'newContact', component: NewContactComponent},
    { path: 'details/:id', component: DetailsComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}