import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NotFoundComponent } from './not-found/not-found.component';
import { TextWithBorder } from './text-with-border/text-with-border.component';
import { TextResponsiveComponent } from './text-responsive/text-responsive.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    TextWithBorder,
    TextResponsiveComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[],
  exports: [
    TextWithBorder,
    TextResponsiveComponent
  ]
})
export class ComponentsModuleModule { }
