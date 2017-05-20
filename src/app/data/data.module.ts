import { NgModule } from '@angular/core';
import { ContactService } from './contact.service';
import { StaticDataSource } from './static-data-source';

@NgModule({
    providers: [ContactService, StaticDataSource]
})
export class ModelModule {}