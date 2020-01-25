import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';
import { ProjectsProviderService } from 'shared_services/services/projects_provider/ProjectsProvider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-project-display',
  templateUrl: './single-project-display.component.html',
  styleUrls: ['./single-project-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProjectDisplayComponent implements OnInit {
  private _project: ProjectsDTO;

  public get project(): ProjectsDTO {
    return this._project;
  }

  public set project(project: ProjectsDTO) {
    this._project = project;
  }

  constructor(private route: ActivatedRoute, private projectsProviderService: ProjectsProviderService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id: string = params.get('projectId');             
      if (typeof this._project === "undefined") {
        this._project = this.projectsProviderService.getProjectById(Number.parseInt(id));
        this.project= this._project;
      } else
        this.project = this._project;
    })
  }

}
