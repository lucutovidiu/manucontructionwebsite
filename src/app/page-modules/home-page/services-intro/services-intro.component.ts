import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

class IntroImage{
  private _introImageUrl:string;
  private _introTitle:string;
  private _introDescription:string;
  constructor(introImageUrl:string,introTitle:string,introDescription:string){
    this.introImageUrl=introImageUrl;
    this.introTitle=introTitle;
    this.introDescription=introDescription;
  }

  get introImageUrl():string{
    return this._introImageUrl.slice();
  }

  get introTitle():string{
    return this._introTitle.slice();
  }

  get introDescription():string{
    return this._introDescription.slice();
  }

  set introImageUrl(introImageUrl:string){
    this._introImageUrl=introImageUrl;
  }

  set introTitle(introTitle:string){
    this._introTitle=introTitle;
  }

  set introDescription(introDescription:string){
    this._introDescription=introDescription;
  }
}

@Component({
  selector: 'app-services-intro',
  templateUrl: './services-intro.component.html',
  styleUrls: ['./services-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesIntroComponent implements OnInit {
  // servicesBackgroundImage: string = "#ffffff";//"url(/assets/services_intro/services_intro_pic6.jpg)";

  boxesBackgroundImages:Array<IntroImage> =  [
    new IntroImage("url(/assets/services_intro/darkend/services_intro_pic5.jpg)","SERVICES_INTRO.VALUES","SERVICES_INTRO.QULITY_TRUST"),
    new IntroImage("url(/assets/services_intro/darkend/services_intro_pic1.jpg)","SERVICES_INTRO.BENEFITS","SERVICES_INTRO.OUR_MISSION_IS"),
    new IntroImage("url(/assets/services_intro/darkend/services_intro_pic3.jpg)","SERVICES_INTRO.SERVICES","SERVICES_INTRO.LC_PRIDES_AND_DIFFERENCIETES")]
 
    constructor() { 
    // this.boxesBackgroundImages.forEach(i=>console.log(i.introDescription));
  }

  ngOnInit() {
  }

}
