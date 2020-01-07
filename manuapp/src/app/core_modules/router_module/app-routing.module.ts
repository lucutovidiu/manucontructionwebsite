import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../../page-modules/home-page/home-page.component'
import { AboutPageComponent } from '../../page-modules/about-page/about-page.component'
import { PageModulesModule } from '../../page-modules/page-modules.module'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PageModulesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
