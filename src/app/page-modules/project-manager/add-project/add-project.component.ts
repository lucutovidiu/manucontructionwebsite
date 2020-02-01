import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProjectsDTO } from "shared_daos/Projects/ProjectsDTO";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  addProjectForm: FormGroup;

  project: ProjectsDTO;

  constructor(private fb: FormBuilder,private httpClient:HttpClient) { }

  ngOnInit() {
    const characteristics = this.fb.group({
      workSurface: ["", [
        Validators.required
      ]],
      workType: ["", [
        Validators.required
      ]],
    })
    this.addProjectForm = this.fb.group({
      title: ["", [
        Validators.required
      ]],
      description: ["", [
        Validators.required
      ]],
      locationArea: ["", [
        Validators.required
      ]],
      characteristics: characteristics,
    })
  }

  submitProject() {
    if (this.addProjectForm.valid) {
    }
  }

  uploadFile(event){
    let file: File = event.target.files[0];
    let formData = new FormData();
    formData.append("projImage",file,file.name);
    this.httpClient.post("http://localhost/api/projects/create-project/uploadpicture",formData)
    .subscribe(res=>{
      console.log(res)
    })
  }

}
