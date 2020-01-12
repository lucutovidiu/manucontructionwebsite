import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {
  languages;
  langLength;
  browserLang;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    this.languages = this.translate.getLangs();
    this.langLength = this.translate.getLangs().length;
    this.setLocalLanguageExist();
  }

  getAllLanguages() {
    return this.languages;
  }

  getLanguagesLength() {
    return this.langLength;
  }

  getCurrentLang() {
    return this.translate.currentLang;
  }

  getBrowserLang() {
    return this.translate.getBrowserLang();
  }

  setLocalLanguageExist() {
    if (localStorage) {
      if (localStorage.getItem('current_language')) {
        (localStorage.getItem('current_language').match(/en|fr/) && this.translate.getBrowserLang().match(/en|fr/)) ?
          this.translate.use(localStorage.getItem('current_language')) : this.defaultLanguage();
      } else {
        (this.translate.getBrowserLang().match(/en|fr/)) ?
          this.setBrowserLang() : this.defaultLanguage();
      }
    }
  }

  setBrowserLang() {
    if (localStorage) {
      this.translate.use(this.translate.getBrowserLang());
      localStorage.setItem('current_language', this.translate.getBrowserLang());
    }
  }

  defaultLanguage(): void {
    if (localStorage) {
      localStorage.setItem('current_language', 'en');
      this.translate.setDefaultLang('en');
    }
  }

  translateUse(param): void {
    this.translate.use(param);
  }

  buildMultipleLanguages() {
    return [
      {
        name: 'English',
        value: this.getAllLanguages()[this.getLanguagesLength() - 2]
      },
      {
        name: 'Franch',
        value: this.getAllLanguages()[this.getLanguagesLength() - 1]
      }
    ];
  }

  buildOneLanguage() {
    return [
      {
        name: 'English',
        value: 'en'
      }
    ];
  }

  checkLanguageExist() {
    return (this.translate.getLangs().indexOf(this.translate.getBrowserLang()) !== -1) ? true : false;
  }
}
