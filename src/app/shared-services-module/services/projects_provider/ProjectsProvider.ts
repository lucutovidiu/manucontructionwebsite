import { Injectable } from '@angular/core';
import { ProjectsRepo } from 'shared_services/repositories/projects/ProjectsRepo';
import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';

@Injectable({
    providedIn: 'root'
})
export class ProjectsProviderService {

    constructor(private projectsRepo: ProjectsRepo) { }

    public getAllProjects(): Array<ProjectsDTO> {
        return this.projectsRepo.findAll();
    }

    public getProjectById(id: number): ProjectsDTO {
        return this.projectsRepo.findById(id);
    }
}