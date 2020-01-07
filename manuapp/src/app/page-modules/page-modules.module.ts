import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent],
  imports: [
    CommonModule
  ],
  exports: [HomePageComponent, AboutPageComponent]
})
export class PageModulesModule { }
