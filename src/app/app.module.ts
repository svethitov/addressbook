import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailsComponent } from './details/details.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { FormComponent } from './form/form.component'

import { AppRoutingModule } from './app-routing.module';
import { ModelModule } from './data/data.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    DetailsComponent,
    NewContactComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModelModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
