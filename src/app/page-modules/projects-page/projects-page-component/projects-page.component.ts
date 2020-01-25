import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProjectsDTO } from "app_module/shared_daos/Projects/ProjectsDTO";
import { ProjectsProviderService } from 'shared_services/services/projects_provider/ProjectsProvider';

@Component({
  selector: 'app-project-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPageComponent implements OnInit {
  private _projects: Array<ProjectsDTO> = new Array<ProjectsDTO>();
  public get projects(): Array<ProjectsDTO> {
    if (this._projects.length === 0){
      this._projects = this.projectsProviderService.getAllProjects();
      // console.log(this._projects)
      return this._projects;
    }else{
      return this._projects;
    }
  }

  constructor(private route: ActivatedRoute, private projectsProviderService: ProjectsProviderService) {
  }

  ngOnInit() {
  }
}
