import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProjectPictureDTO } from "shared_daos/Projects/ProjectPictureDTO";

@Component({
  selector: 'app-project-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPageComponent implements OnInit {
  
  mockPictures: Array<ProjectPictureDTO> = [
    { id: 1, src: "/assets/projects_component/proj1/services_intro_pic1.jpg", title: "pic1", isDisplayed: true },
    { id: 2, src: "/assets/projects_component/proj1/services_intro_pic2.jpg", title: "pic2", isDisplayed: false },
    { id: 3, src: "/assets/projects_component/proj1/services_intro_pic3.jpg", title: "pic3", isDisplayed: false },
  ]

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
