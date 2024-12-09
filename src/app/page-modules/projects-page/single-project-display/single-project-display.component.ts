import {Component, OnInit} from '@angular/core';
import {getMockProjects, ProjectsDTO} from 'app_module/shared_daos/Projects/ProjectsDTO';
import {ProjectsProviderService} from 'shared_services/services/projects_provider/ProjectsProvider';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-single-project-display',
  templateUrl: './single-project-display.component.html',
  styleUrls: ['./single-project-display.component.scss']
})
export class SingleProjectDisplayComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor(private route: ActivatedRoute, private projectsProviderService: ProjectsProviderService) {
  }

  private _project: ProjectsDTO;

  public get project(): ProjectsDTO {
    return this._project;
  }

  public set project(project: ProjectsDTO) {
    this._project = project;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: string = params.get('projectId');
      this.fetchProjects(id);
    });
  }

  public projectExists(project: ProjectsDTO): boolean {

    return typeof project !== 'undefined';
  }

  private fetchProjects(id): void {
    getMockProjects().pipe(
      map((projects: Array<ProjectsDTO>) => projects.find(p => p.id === id))
    ).subscribe((nextProject: ProjectsDTO | undefined) => {
      if (nextProject) {
        this.project = {...nextProject};
      }
    });
    // this.projectsProviderService.getProjectById().subscribe((nextProject: ProjectsDTO) => {
    //   this.project = Object.assign({}, nextProject);
    // });
    // this.projectsProviderService.fetchSingleProject(id);
  }

}
