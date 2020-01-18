import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  servicesBackgroundImage: string = "url(/assets/contact-component/contact_pic1.jpg)";
  constructor() { }

  ngOnInit() {
  }

}
