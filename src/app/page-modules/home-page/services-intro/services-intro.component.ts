import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-intro',
  templateUrl: './services-intro.component.html',
  styleUrls: ['./services-intro.component.scss']
})
export class ServicesIntroComponent implements OnInit {
  servicesBackgroundImage: string = "url(/assets/services_intro/services_intro_pic2.jpg)";

  constructor() { }

  ngOnInit() {
  }

}
