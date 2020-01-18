import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-routing.module' 
import { HomePageComponent } from './home-page.component/home-page.component'
import { ComponentsModuleModule } from 'shared-components/components-module.module'
import { HeroComponent } from './hero/hero.component'
import { ServicesIntroComponent } from './services-intro/services-intro.component'
import { SharedServicesModuleModule } from 'shared_services/shared-services-module.module'
import { ContactModule } from "page-modules/contact-page/contact.page.module"

@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent,
    ServicesIntroComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ComponentsModuleModule,
    SharedServicesModuleModule,
    ContactModule
  ]
})
export class HomePageModule {}
