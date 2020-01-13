import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModuleModule } from "components/components-module.module"
import { HomePageComponent } from 'page-modules/home-page/home-page.component';
import { AboutPageComponent } from 'page-modules/about-page/about-page.component';
import { ServicesPageComponent } from 'page-modules/services-page/services-page.component';
import { GaleriePageComponent } from 'page-modules/galerie-page/galerie-page.component';
import { ContactPageComponent } from 'page-modules/contact-page/contact-page.component';
import { SharedServicesModuleModule } from "shared_services/shared-services-module.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarModule } from "core_modules/navbar/navbar.module"

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ServicesPageComponent,
    GaleriePageComponent,
    ContactPageComponent,
    NotFoundComponent
  ],
  imports: [
    SharedServicesModuleModule,
    ComponentsModuleModule,
    CommonModule,
    NavBarModule
  ],
  exports: [
    HomePageComponent, 
    AboutPageComponent, 
    ServicesPageComponent, 
    GaleriePageComponent, 
    ContactPageComponent
  ]
})
export class PageModulesModule { }
