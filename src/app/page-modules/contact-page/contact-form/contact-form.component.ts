import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ContactFormData } from 'app_module/shared_daos/contactPage/ContactFormData';
import { UploadResultDto } from '../../../../../server/modules/db-module/projects-service/daos/UploadResult';
import { siteConfig } from "shared_services/websiteSettings/configs";
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactFormData: FormGroup;
  serverFormData: ContactFormData;
  servicesBackgroundImage: string = "url(/assets/contact-component/contact_pic1.jpg)";
  isEmailSending: boolean = false;
  emailServerReponse: UploadResultDto;

  //spinner config
  color = 'accent';
  mode = 'indeterminate';
  value = 50;

  constructor(private fb: FormBuilder, private emailService: EmailService) { }

  ngOnInit() {
    this.contactFormData = this.fb.group({
      fullName: ["", [
        Validators.required,
        Validators.minLength(4)
      ]],
      eMail: ["", [
        Validators.required,
        Validators.pattern(/^(.*[^@])(@{1})(\w+\.)+(\w+)+/)
      ]],
      phoneNumber: ["", [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern(/^([+]?)([0-9]+)$/)
      ]],
      message: ["", [
        Validators.required
      ]]
    })
  }

  get siteEmail(): string {
    return siteConfig.topNabBar.email;
  }

  submitFormData() {
    if (this.contactFormData.valid) {
      this.serverFormData = this.contactFormData.value;
      this.emailService.sendEmail(this.serverFormData)
        .subscribe((response: UploadResultDto) => {
          this.emailServerReponse = response;
        })
    }
  }
}

