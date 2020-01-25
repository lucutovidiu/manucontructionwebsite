import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ProjectsPageComponent } from './projects-page-component/projects-page.component'
import { ProjectsRoutingModule } from './projects-routing.module'
import { ComponentsModuleModule } from "shared-components/components-module.module";
import { SingleProjectDisplayComponent } from './single-project-display/single-project-display.component';
import { SharedServicesModuleModule } from "shared_services/shared-services-module.module"

@NgModule({
  declarations: [
    ProjectsPageComponent,
    SingleProjectDisplayComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ComponentsModuleModule,
    SharedServicesModuleModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ProjectsModule {}
