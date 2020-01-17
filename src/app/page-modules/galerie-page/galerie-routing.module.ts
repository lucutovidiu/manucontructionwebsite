import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriePageComponent } from './galerie-page-component/galerie-page.component'

const routes: Routes = [
  {
    path: '',
    component: GaleriePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalerieRoutingModule { }
