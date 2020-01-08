import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from 'page-modules/home-page/home-page.component';
import { AboutPageComponent } from 'page-modules/about-page/about-page.component';
import { ServicesPageComponent } from 'page-modules/services-page/services-page.component';
import { GaleriePageComponent } from 'page-modules/galerie-page/galerie-page.component';
import { ContactPageComponent } from 'page-modules/contact-page/contact-page.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, ServicesPageComponent, GaleriePageComponent, ContactPageComponent],
  imports: [
    CommonModule
  ],
  exports: [HomePageComponent, AboutPageComponent, ServicesPageComponent,GaleriePageComponent,ContactPageComponent]
})
export class PageModulesModule { }
