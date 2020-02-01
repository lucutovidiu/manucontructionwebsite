import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectManagerRoutingModule } from './project-manager-routing.module';
import { SharedServicesModule } from 'shared_services/shared-services.module'

@NgModule({
  declarations: [AddProjectComponent],
  imports: [
    CommonModule,
    ProjectManagerRoutingModule,
    SharedServicesModule
  ]
})
export class ProjectManagerModule { }
