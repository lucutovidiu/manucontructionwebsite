import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsPageComponent } from './projects-page-component/projects-page.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: ':projectId',
    component: ProjectsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
