import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {
  private languages;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr','ro']);
    this.languages = this.translate.getLangs();
    this.setLocalLanguageExist();
  }

  private isLocalStorageSet(): boolean {
    return typeof localStorage !== "undefined";
  }

  getAllLanguages() {
    return this.languages;
  }

  getCurrentLang() {
    return this.translate.currentLang;
  }

  switchLanguage(language){
    if (this.isLocalStorageSet()) {
      localStorage.setItem("current_language",language);
      this.setLocalLanguageExist();
    }
  }

  private setLocalLanguageExist() {
    if (this.isLocalStorageSet()) {
      if (localStorage.getItem('current_language')) {
        (localStorage.getItem('current_language').match(/en|fr|ro/) && this.translate.getBrowserLang().match(/en|fr/)) ?
          this.translate.use(localStorage.getItem('current_language')) : this.defaultLanguage();
      } else {
        (this.translate.getBrowserLang().match(/en|fr|ro/)) ?
          this.setBrowserLang() : this.defaultLanguage();
      }
    }
  }

  private setBrowserLang() {
    if (this.isLocalStorageSet()) {
      this.translate.use(this.translate.getBrowserLang());
      localStorage.setItem('current_language', this.translate.getBrowserLang());
    }
  }
  
  private defaultLanguage(): void {
    if (this.isLocalStorageSet()) {
      localStorage.setItem('current_language', 'en');
      this.translate.setDefaultLang('en');
    }
  }
}
