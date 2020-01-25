import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';
import { ProjectsProviderService } from 'shared_services/services/projects_provider/ProjectsProvider';

@Component({
  selector: 'app-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.scss']
})
export class ProjectsSliderComponent implements OnInit {

  private _sliderHeight: number;

  private _imageBoxWidth: number;
  private _imageBoxHeight: number;
  private imageHeightPercentage = 0.30;
  private imageWidthPercentage = 0.30;

  private scrollByUpDown:number = 100;

  private smallScreenMaxWidth: number = 900;
  private maxImageBoxHeightForSmallWidth: number = 270;
  private maxImageBoxWidthForSmallWidth: number = 270;

  private gapBetweenImages: number = 10;
  private _gapBetweenSliderAndImageBox: number = 10;

  constructor(private projectsProviderService: ProjectsProviderService) { }

  ngOnInit() {
    this.calculateSliderSizes();
  }

  private calculateSliderHeight(): number {
    if (this.windowHeight <= this.smallScreenMaxWidth) {
      return this.maxImageBoxHeightForSmallWidth;
    } else {
      return Math.round(this.windowHeight * this.imageHeightPercentage);
    }
  }

  public get projects():Array<ProjectsDTO>{
    // console.log(this.projectsProviderService.getAllProjects())
    return this.projectsProviderService.getAllProjects();
  }

  private calculateBoxHeight() {
    return this.sliderHeight - 2 * this._gapBetweenSliderAndImageBox;
  }

  private calculateSliderSizes() {
    // this.sliderWidth is auto from CSS, so no need to specify specific size
    this._sliderHeight = this.calculateSliderHeight();
  }
  public calculateImagePosition(i: number) {
    return this.imageBoxWidth * i + this.gapBetweenImages * i;
  }

  handleNextPrevPictureSelect(type, elRef: HTMLElement) {
    let imageWidth:number = this.imageBoxWidth+ this.gapBetweenImages;
    switch (type) {
      case "PREV": {
        elRef.scrollTo(elRef.scrollLeft - imageWidth, 0);
        break;
      }
      case "NEXT": {
        elRef.scrollTo(elRef.scrollLeft + imageWidth, 0);
        break;
      }
    }
  }

  onResize(event: ResizedEvent) {
    this.calculateSliderSizes();
  }

  handleScrollDownUpPage(type:string):void{
    switch (type){
      case "UP":{
        if(window)
          window.scrollBy(0, this.scrollByUpDown);
        return;
      }
      case "DOWN":{
        if(window)
          window.scrollBy(0, -this.scrollByUpDown);
        return;
      }
    }
  }

  public get gapBetweenSliderAndImageBox() {
    return this._gapBetweenSliderAndImageBox;
  }

  public get sliderHeight(): number {
    this._sliderHeight = this.calculateSliderHeight();
    return this._sliderHeight;
  }

  public get imageBoxWidth(): number {
    this._imageBoxWidth = this.calculateBoxHeight();
    return this._imageBoxWidth;
  }

  public get imageBoxHeight(): number {
    this._imageBoxHeight = this.calculateBoxHeight();
    return this._imageBoxHeight;
  }

  private get windowWidth(): number {
    if (typeof window !== "undefined")
      return window.innerWidth;
    else
      return this.maxImageBoxWidthForSmallWidth;
  }

  private get windowHeight(): number {
    if (typeof window !== "undefined")
      return window.innerHeight;
    else
      return this.maxImageBoxHeightForSmallWidth;
  }
}
