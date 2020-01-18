import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-intro',
  templateUrl: './services-intro.component.html',
  styleUrls: ['./services-intro.component.scss']
})
export class ServicesIntroComponent implements OnInit {
  servicesBackgroundImage: string = "#ffffff";//"url(/assets/services_intro/services_intro_pic6.jpg)";
 
  servicesValuesBackgroundImage: string = "url(/assets/services_intro/darkend/services_intro_pic5.jpg)";
  servicesBenefitsBackgroundImage: string = "url(/assets/services_intro/darkend/services_intro_pic1.jpg)";
  servicesServicesBackgroundImage: string = "url(/assets/services_intro/darkend/services_intro_pic3.jpg)";



  constructor() { }

  ngOnInit() {
  }

}
