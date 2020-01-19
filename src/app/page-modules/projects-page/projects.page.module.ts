import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ProjectsPageComponent } from './projects-page-component/projects-page.component'
import { ProjectsRoutingModule } from './projects-routing.module'
import { ComponentsModuleModule } from "shared-components/components-module.module";

@NgModule({
  declarations: [
    ProjectsPageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ComponentsModuleModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ProjectsModule {}
