import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactPageComponent } from './contact-page-component/contact-page.component'
import { ContactRoutingModule } from './contact-routing.module';
import { FindmeMapComponent } from './findme-map/findme-map.component'
import { ComponentsModuleModule } from "shared-components/components-module.module";
import { ContactFormComponent } from './contact-form/contact-form.component'


@NgModule({
  declarations: [
    ContactPageComponent,
    FindmeMapComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ComponentsModuleModule
  ],
  exports:[
    ContactPageComponent
  ]

})
export class ContactModule {}
