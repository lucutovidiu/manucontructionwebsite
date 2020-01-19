import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, SPINNER } from 'ngx-ui-loader';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from '@squadette/hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './page-modules/navbar/navbar.module'
import { SharedServicesModuleModule } from "shared_services/shared-services-module.module"
import { HomePageModule } from 'page-modules/home-page/home.page.module'
import { ComponentsModuleModule } from "shared-components/components-module.module"
import { ProjectsModule } from "page-modules/projects-page/projects.page.module"


export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NavBarModule,
    HttpClientModule,
    SharedServicesModuleModule,
    ComponentsModuleModule,
    HomePageModule,
    ProjectsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxUiLoaderModule.forRoot({
      fgsSize: 100,
      fgsType: SPINNER.threeStrings,
      fgsColor: '#ff3366',
      hasProgressBar: false,
      bgsOpacity: 0.0,
    }),
    NgxUiLoaderRouterModule
  ],
  exports: [
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
