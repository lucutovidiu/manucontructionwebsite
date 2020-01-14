import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedServicesModuleModule } from 'shared_services/shared-services-module.module';
import { HeroComponent } from './hero/hero.component'

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    SharedServicesModuleModule
  ],
  providers:[],
  exports: [
    HeroComponent
  ]
})
export class ComponentsModuleModule { }
