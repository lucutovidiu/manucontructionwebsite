import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NotFoundComponent } from './not-found/not-found.component';
import { TextWithBorder } from './text-with-border/text-with-border.component';
import { TextResponsiveComponent } from './text-responsive/text-responsive.component';
import { FooterComponent } from './footer/footer.component';
import { SharedServicesModuleModule } from "shared_services/shared-services-module.module"

@NgModule({
  declarations: [
    NotFoundComponent,
    TextWithBorder,
    TextResponsiveComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedServicesModuleModule
  ],
  providers: [],
  exports: [
    TextWithBorder,
    TextResponsiveComponent,
    FooterComponent
  ]
})
export class ComponentsModuleModule { }
