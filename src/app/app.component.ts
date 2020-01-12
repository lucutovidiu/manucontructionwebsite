import { Component } from '@angular/core';
import { CustomTranslateService } from "shared_services/services/translation/custom-translate.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manuapp';

  constructor(private translate: CustomTranslateService){
  }
}
