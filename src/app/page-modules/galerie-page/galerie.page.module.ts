import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GaleriePageComponent } from './galerie-page-component/galerie-page.component'
import { GalerieRoutingModule } from './galerie-routing.module'


@NgModule({
  declarations: [
    GaleriePageComponent
  ],
  imports: [
    CommonModule,
    GalerieRoutingModule
  ]
})
export class GalerieModule {}
