import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers:[
    TranslateService
  ],
  exports: [
    TranslateModule,
  ]
})
export class SharedServicesModuleModule { }
