import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { SharedServicesModule } from 'shared_services/shared-services.module'
import { ComponentsModuleModule } from 'shared-components/components-module.module'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    SharedServicesModule,
    MatInputModule,
    MatButtonModule,
    ComponentsModuleModule,
    ReactiveFormsModule,
  ]
})
export class LoginPageModule { }
