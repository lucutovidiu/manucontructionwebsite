import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MenuBarComponent } from './menu/menu.component'

@NgModule({
  declarations: [MenuBarComponent],
  imports: [
    CommonModule, BrowserAnimationsModule, MatMenuModule, MatButtonModule
  ],
  exports:[MenuBarComponent]
})
export class NavBarModule { }