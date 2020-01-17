import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactPageComponent } from './contact-page-component/contact-page.component'
import { ContactRoutingModule } from './contact-routing.module'


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule {}
