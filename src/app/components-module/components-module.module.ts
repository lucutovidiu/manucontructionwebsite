import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedServicesModuleModule } from 'shared_services/shared-services-module.module';
import { HeroComponent } from './hero/hero.component';
import { ServicesIntroComponent } from './services-intro/services-intro.component'

@NgModule({
  declarations: [HeroComponent, ServicesIntroComponent],
  imports: [
    CommonModule,
    SharedServicesModuleModule
  ],
  providers:[],
  exports: [
    HeroComponent,
    ServicesIntroComponent
  ]
})
export class ComponentsModuleModule { }
