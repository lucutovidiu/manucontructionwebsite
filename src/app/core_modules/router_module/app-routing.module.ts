import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from 'page-modules/home-page/home-page.component'
import { AboutPageComponent } from 'page-modules/about-page/about-page.component'
import { PageModulesModule } from 'page-modules/page-modules.module'
import { ServicesPageComponent } from 'page-modules/services-page/services-page.component';
import { GaleriePageComponent } from 'page-modules/galerie-page/galerie-page.component';
import { ContactPageComponent } from 'page-modules/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'galerie',
    component: GaleriePageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PageModulesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
