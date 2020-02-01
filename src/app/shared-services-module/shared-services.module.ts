import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/interceptor/JwtInterceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers:[
    TranslateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  exports: [
    TranslateModule
  ]
})
export class SharedServicesModule { }
