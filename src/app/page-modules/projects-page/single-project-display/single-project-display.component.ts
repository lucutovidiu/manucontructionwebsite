import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, Input } from '@angular/core';
import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';
import { ProjectsProviderService } from 'shared_services/services/projects_provider/ProjectsProvider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-project-display',
  templateUrl: './single-project-display.component.html',
  styleUrls: ['./single-project-display.component.scss']
})
export class SingleProjectDisplayComponent implements OnInit {

  private _project: ProjectsDTO;

  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor(private route: ActivatedRoute, private projectsProviderService: ProjectsProviderService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: string = params.get('projectId');
      this.fetchProjects(id);
    })
  }

  public get project(): ProjectsDTO {
    return this._project;
  }

  public set project(project: ProjectsDTO) {
    this._project = project;
  }

  private fetchProjects(id): void {
    this.projectsProviderService.getProjectById().subscribe((nextProject: ProjectsDTO) => {
      this.project = Object.assign({}, nextProject);
    });
    this.projectsProviderService.fetchSingleProject(id);
  }

  public projectExists(project: ProjectsDTO): boolean {

    return typeof project !== "undefined";
  }

}
