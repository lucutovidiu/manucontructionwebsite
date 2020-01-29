import { Injectable } from '@angular/core';
import { ProjectsRepo } from 'shared_services/repositories/projects/ProjectsRepo';
import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectsProviderService {

    private projectsSubjectSingleProject$ = new Subject<ProjectsDTO>();
    private projectsSubjectArray$ = new BehaviorSubject<ProjectsDTO[]>([]);

    constructor(private projectsRepo: ProjectsRepo) { }

    public fetchAllProjects(): void {
        this.projectsRepo.findAll().then((project: Array<ProjectsDTO>) => {
            this.projectsSubjectArray$.next(project);
        });
    }

    public getAllProjects(): Observable<Array<ProjectsDTO>> {
        return this.projectsSubjectArray$.asObservable();
    }

    public fetchSingleProject(id: string): void {
        this.projectsRepo.findById(id).then((project: ProjectsDTO) => {
            this.projectsSubjectSingleProject$.next(project);
        })
    }

    public getProjectById(): Observable<ProjectsDTO> {
        return this.projectsSubjectSingleProject$.asObservable();
    }
}