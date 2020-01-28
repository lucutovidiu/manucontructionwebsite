import { Injectable } from "@angular/core";
import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectsRepo {

    private projectsSubjectArray$ = new BehaviorSubject<ProjectsDTO[]>([]);
    private _projectsArray: Array<ProjectsDTO> = [];

    private projectsSubjectSingleProject$ = new Subject<ProjectsDTO>();
    private _projectsSingleProject: ProjectsDTO;

    private _httpGetOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    private startFetchingAllProjects() {
        if (this._projectsArray.length === 0) {
            this.http.get(environment.projects.GET_ALL_PROJECTS, this._httpGetOptions).subscribe((projects) => {
                this._projectsArray = Object.values(projects);
                if (this._projectsArray.length > 0) {
                    this.projectsSubjectArray$.next(this._projectsArray);
                }
            });
        } else {
            this.projectsSubjectArray$.next(this._projectsArray);
        }
    }

    public findAll(): Observable<any> {
        this.startFetchingAllProjects();
        return this.projectsSubjectArray$.asObservable();
    }

    private fetchProjectById(id: string) {
        this.http.get(environment.projects.GET_PROJECT_BY_ID + id, this._httpGetOptions).subscribe((project: ProjectsDTO) => {
            this._projectsSingleProject = project;
            if (typeof this._projectsSingleProject.id !== "undefined") {
                this.projectsSubjectSingleProject$.next(this._projectsSingleProject);
            }
        });
    }

    private startGettingProjectById(id: string) {
        if (this._projectsArray.length > 0) {
            this._projectsSingleProject = this._projectsArray.find(proj => proj.id === id);
            if (typeof this._projectsSingleProject !== "undefined")
            setTimeout(()=>{
                this.projectsSubjectSingleProject$.next(this._projectsSingleProject);
            },1500)                
            else
                this.fetchProjectById(id);
        } else {
            this.fetchProjectById(id);
        }
    }

    public findById(id: string) {
        this.startGettingProjectById(id);
        return this.projectsSubjectSingleProject$;
    }

    constructor(private http: HttpClient) {
        console.log("[env]: ", environment.projects.API_END_POINT);
    }
}