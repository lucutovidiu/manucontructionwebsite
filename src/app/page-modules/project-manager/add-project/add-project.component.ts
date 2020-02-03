import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const uuidv4 = require('uuid/v4');

import { ProjectsProviderService } from "shared_services/services/projects_provider/ProjectsProvider";
import { UploadResultDto } from '../../../../../server/modules/db-module/projects-service/daos/UploadResult';
import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';
import { Utils } from '../../../../../server/utils/UtilFunctions';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  addProjectForm: FormGroup;
  uploadFilesNames: Array<string> = new Array<string>();
  filesFormData: FormData = new FormData();;
  isFormUploading: boolean = false;
  uploadResult: UploadResultDto = new UploadResultDto(true, "");
  successfullyUploadedMessage: UploadResultDto = new UploadResultDto(false, "Succesfully Uploaded Files");

  color = 'accent';
  mode = 'indeterminate';
  value = 50;

  constructor(private fb: FormBuilder, private projectsProviderService: ProjectsProviderService) { }

  ngOnInit() {
    const characteristics = this.fb.group({
      workSurface: ["", [
        Validators.required,
        Validators.pattern("^[1-9]+$")
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

  private submitFilesFirst() {
    this.isFormUploading = true;
    return this.projectsProviderService.uploadImageToServerTemporary(this.filesFormData);
  }

  private sendProjectData() {
    let uploadForm = this.convertHtmlFormToUploadForm(this.addProjectForm.value);
    this.projectsProviderService.uploadProject(uploadForm)
      .subscribe((res: UploadResultDto) => {
        if (res.wasSuccesfull) {
          this.updateUserLog(res, true);
          this.projectsProviderService.forceFetchAllProjects();
        } else {
          this.updateUserLog(res, false);
        }
      })
  }

  private updateUserLog(res, error: boolean) {
    if (!error) {
      //in case of error
      this.uploadResult = new UploadResultDto(res.wasSuccesfull, res.message);
      this.isFormUploading = false;
      this.successfullyUploadedMessage.wasSuccesfull = false;
    } else {
      this.uploadResult.wasSuccesfull = true;
      this.successfullyUploadedMessage = new UploadResultDto(res.wasSuccesfull, res.message);
      this.isFormUploading = false;
    }
  }

  private convertHtmlFormToUploadForm(htmlForm): ProjectsDTO {
    let uploadForm: ProjectsDTO = new ProjectsDTO();
    uploadForm.title = htmlForm.title;
    uploadForm.description = htmlForm.description;
    uploadForm.locationArea = htmlForm.locationArea;
    uploadForm.characteristics = htmlForm.characteristics;
    uploadForm.imageSrc = this.uploadFilesNames;
    return uploadForm;
  }

  submitProject() {
    if (this.addProjectForm.valid && this.uploadFilesNames.length !== 0) {
      this.submitFilesFirst().subscribe((res: UploadResultDto) => {
        if (res.wasSuccesfull) {
          this.sendProjectData();
        } else {
          this.updateUserLog(res, false);
        }
      })
    } else {
      this.updateUserLog(new UploadResultDto(false, "You Must Select Images Too"), false);
    }
  }

  uploadFile(event) {
    let file: File;//= event.target.files;
    for (file of event.target.files) {
      let newFileName = Utils.convertDashToUnderscore(uuidv4()) + "." + file.type.split("/")[1];
      this.uploadFilesNames.push(newFileName);
      this.filesFormData.append("projImages", file, newFileName);
    }
  }

}
