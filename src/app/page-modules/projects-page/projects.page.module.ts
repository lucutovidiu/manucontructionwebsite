import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectsPageComponent } from './projects-page-component/projects-page.component'
import { ProjectsRoutingModule } from './projects-routing.module'
import { ComponentsModuleModule } from "shared-components/components-module.module"

@NgModule({
  declarations: [
    ProjectsPageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ComponentsModuleModule
  ]
})
export class ProjectsModule {}
