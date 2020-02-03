import { Component, OnInit } from '@angular/core';

import { siteConfig } from "shared_services/websiteSettings/configs.js"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  siteConfig = siteConfig.topNabBar;
  addressConfig = siteConfig.address;
  constructor() { }

  ngOnInit() {
  }

  getPhonesLength(){
    return this.siteConfig.phoneNumber.length -1;
  }

}
