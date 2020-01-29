import { Injectable } from "@angular/core";
import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { isNull } from 'util';

@Injectable({
    providedIn: 'root'
})
export class ProjectsRepo {

    private _httpGetOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    private _projectsArray: Array<ProjectsDTO> = [];

    private set projectsArray(array: Array<ProjectsDTO>) {
        if (typeof sessionStorage !== "undefined") {
            sessionStorage.setItem("projectsArray", JSON.stringify(array));
        }
        this._projectsArray = array;
    }

    private get projectsArray(): Array<ProjectsDTO> {
        if (typeof sessionStorage !== "undefined") {
            let localcache = JSON.parse(sessionStorage.getItem("projectsArray"));
            if (!isNull(localcache)) {
                this._projectsArray = localcache;
                return this._projectsArray;
            }
        }
        return this._projectsArray;
    }

    private fetchAllExternally(): Promise<Array<ProjectsDTO>> {
        return new Promise(observer => {
            this.http.get(environment.projects.GET_ALL_PROJECTS, this._httpGetOptions).subscribe((projects: any) => {
                this.projectsArray = Object.values(projects);
                if (this.projectsArray.length > 0) {
                    observer(this.projectsArray);
                }
            });
        });
    }

    public findAll(): Promise<Array<ProjectsDTO>> {
        if (this.projectsArray.length === 0) {
            return this.fetchAllExternally();
        } else {
            return new Promise<Array<ProjectsDTO>>((observer) => {
                observer(this.projectsArray);
            });
        }
    }

    private fetchByIdExternally(id: string): Promise<ProjectsDTO> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.projects.GET_PROJECT_BY_ID + id, this._httpGetOptions).subscribe((project: ProjectsDTO) => {
                if (typeof project !== "undefined") {
                    resolve(project);
                }
            });
        })
    }

    public findById(id: string): Promise<ProjectsDTO> {
        if (this.projectsArray.length > 0) {
            let projectsSingleProject = this.projectsArray.find(proj => proj.id === id);
            if (typeof projectsSingleProject !== "undefined")
                return new Promise((resolve, reject) => {
                    resolve(projectsSingleProject);
                })
            else
                return this.fetchByIdExternally(id);
        } else {
            return this.fetchByIdExternally(id);
        }
    }



    constructor(private http: HttpClient) {
        // console.log("[env]: ", environment.projects.API_END_POINT);
    }
}