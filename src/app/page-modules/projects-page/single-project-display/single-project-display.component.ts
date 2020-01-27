import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';
import { ProjectsProviderService } from 'shared_services/services/projects_provider/ProjectsProvider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-project-display',
  templateUrl: './single-project-display.component.html',
  styleUrls: ['./single-project-display.component.scss']
})
export class SingleProjectDisplayComponent implements OnInit {
  public project: ProjectsDTO;

  constructor(private route: ActivatedRoute, private projectsProviderService: ProjectsProviderService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id: string = params.get('projectId');             
      this.fetchProjects(id);
    })
  }

  private fetchProjects(id){
    this.projectsProviderService.getProjectById(id).subscribe((nextProject:ProjectsDTO)=>{
      this.project = Object.assign({},nextProject);
    })
  }

  public projectExists(project:ProjectsDTO):boolean{
    return typeof project !== "undefined";
  }

}
