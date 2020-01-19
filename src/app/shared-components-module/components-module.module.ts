import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NotFoundComponent } from './not-found/not-found.component';
import { TextWithBorder } from './text-with-border/text-with-border.component';
import { FooterComponent } from './footer/footer.component';
import { SharedServicesModuleModule } from "shared_services/shared-services-module.module";
import { ImageSliderComponent } from './image-slider/image-slider.component'

@NgModule({
  declarations: [
    NotFoundComponent,
    TextWithBorder,
    FooterComponent,
    ImageSliderComponent
  ],
  imports: [
    CommonModule,
    SharedServicesModuleModule
  ],
  providers: [],
  exports: [
    TextWithBorder,
    FooterComponent,
    ImageSliderComponent
  ]
})
export class ComponentsModuleModule { }
