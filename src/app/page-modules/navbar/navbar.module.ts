import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';

import { MenuBarComponent } from './menu/menu.component';
import { SharedServicesModule } from "shared_services/shared-services.module"
import { CallToActionComponent } from './call-to-action/call-to-action.component'

@NgModule({
  declarations: [
    MenuBarComponent,
    CallToActionComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    SharedServicesModule
  ],
  exports: [
    MenuBarComponent,
    CallToActionComponent
  ]
})
export class NavBarModule { }