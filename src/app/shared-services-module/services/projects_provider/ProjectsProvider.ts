import { Injectable } from '@angular/core';
import { ProjectsRepo } from 'shared_services/repositories/projects/ProjectsRepo';
import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectsProviderService {
    
    constructor(private projectsRepo: ProjectsRepo) { }

    public getAllProjects():Observable<any>{
        return this.projectsRepo.findAll();
    }

    public getProjectById(id: string): Observable<any> {
        return this.projectsRepo.findById(id);
    }
}