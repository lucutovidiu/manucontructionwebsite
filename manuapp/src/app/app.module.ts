import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core_modules/router_module/app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './core_modules/navbar/navbar.module'

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,NavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
