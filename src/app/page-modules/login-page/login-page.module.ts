import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login/login.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { SharedServicesModuleModule } from 'shared_services/shared-services-module.module'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    SharedServicesModuleModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginPageModule { }
