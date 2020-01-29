import { Injectable } from '@angular/core';
import { ProjectsRepo } from 'shared_services/repositories/projects/ProjectsRepo';
import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectsProviderService {

    constructor(private projectsRepo: ProjectsRepo) { }

    public fetchAllProjects(): void {
        return this.projectsRepo.fetchAllProjects();
    }

    public getAllProjects(): Observable<Array<ProjectsDTO>> {
        return this.projectsRepo.findAll();
    }

    public fetchSingleProject(id: string): void {
        return this.projectsRepo.startGettingProjectById(id);
    }

    public getProjectById(): Observable<ProjectsDTO> {
        return this.projectsRepo.findById();
    }
}