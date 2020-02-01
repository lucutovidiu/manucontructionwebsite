import { Routes, RouterModule } from "@angular/router";
import { AddProjectComponent } from './add-project/add-project.component';
import { NgModule } from '@angular/core';
import { AuthGuardService } from 'shared_services/services/auth-service/auth-guard-service';


const routes: Routes=[
    {
        path: "",
        component: AddProjectComponent,
        canActivate: [AuthGuardService]
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class ProjectManagerRoutingModule{}