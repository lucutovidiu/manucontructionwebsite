import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { siteConfig } from "shared_services/websiteSettings/configs.js"
import { CustomTranslateService } from "shared_services/services/translation/custom-translate.service"

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallToActionComponent implements OnInit {
  siteConfig = siteConfig.topNabBar;
  availableLanguages = this.translate.getAllLanguages();
  currentSelectedLanguage = this.translate.getCurrentLang();

  constructor(private translate: CustomTranslateService) {
  }

  ngOnInit() {
  }

  switchLanguage(language:string){
    this.translate.switchLanguage(language);
    this.currentSelectedLanguage = language;
  }

}
