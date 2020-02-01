import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectManagerRoutingModule } from './project-manager-routing.module';
import { SharedServicesModule } from 'shared_services/shared-services.module'
import { ComponentsModuleModule } from 'shared-components/components-module.module'

@NgModule({
  declarations: [AddProjectComponent],
  imports: [
    CommonModule,
    ProjectManagerRoutingModule,
    SharedServicesModule,
    ComponentsModuleModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ProjectManagerModule { }
