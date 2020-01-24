import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularResizedEventModule } from 'angular-resize-event';

import { HomePageRoutingModule } from './home-routing.module' 
import { HomePageComponent } from './home-page.component/home-page.component'
import { ComponentsModuleModule } from 'shared-components/components-module.module'
import { HeroComponent } from './hero/hero.component'
import { ServicesIntroComponent } from './services-intro/services-intro.component'
import { SharedServicesModuleModule } from 'shared_services/shared-services-module.module'
import { ContactModule } from "page-modules/contact-page/contact.page.module";
import { ServicesDescriptionComponent } from './services-description-component/services-description/services-description.component';
import { ProjectWorkDoneBoxComponent } from '../home-page/services-description-component/project-work-done-box/project-work-done-box.component'
import { ServicesComponent } from "./services/services.component";
import { ProjectsSliderComponent } from './projects-slider/projects-slider.component'

@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent,
    ServicesComponent,
    ServicesIntroComponent,
    ServicesDescriptionComponent,
    ProjectWorkDoneBoxComponent,
    ProjectsSliderComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ComponentsModuleModule,
    SharedServicesModuleModule,
    ContactModule,
    AngularResizedEventModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomePageModule {}
