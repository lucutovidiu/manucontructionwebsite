import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { ContactPageComponent } from './contact-page-component/contact-page.component'
import { ContactRoutingModule } from './contact-routing.module';
import { FindmeMapComponent } from './findme-map/findme-map.component'
import { ComponentsModuleModule } from "shared-components/components-module.module";
import { ContactFormComponent } from './contact-form/contact-form.component'
import { SharedServicesModule } from "shared_services/shared-services.module"


@NgModule({
  declarations: [
    ContactPageComponent,
    FindmeMapComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ComponentsModuleModule,
    SharedServicesModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports:[
    ContactPageComponent
  ]

})
export class ContactModule {}
