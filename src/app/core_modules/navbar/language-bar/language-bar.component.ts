import { Component, OnInit } from '@angular/core'
import { CustomTranslateService } from "shared_services/services/translation/custom-translate.service"

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit {

  constructor(private translate: CustomTranslateService) { }

  ngOnInit() {
  }

  setLanguage(inputLang): void {
    localStorage.setItem('current_language', inputLang);
    this.translate.setLocalLanguageExist();
  }

}
