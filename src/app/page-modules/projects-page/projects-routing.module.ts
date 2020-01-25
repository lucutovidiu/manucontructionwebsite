import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleProjectDisplayComponent } from './single-project-display/single-project-display.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: ':projectId',
    component: SingleProjectDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
