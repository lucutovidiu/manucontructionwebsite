import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

import { ProjectPictureDTO } from 'app_module/shared_daos/Projects/ProjectPictureDTO';

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


  private smallScreenMaxWidth: number = 900;
  private maxImageBoxHeightForSmallWidth: number = 270;
  private maxImageBoxWidthForSmallWidth: number = 270;

  private gapBetweenImages: number = 10;
  private _gapBetweenSliderAndImageBox: number = 10;

  projectPictures: Array<ProjectPictureDTO> = [
    { id: 1, src: "/assets/projects_component/proj1/proj1_pic4.jpg", title: "Cool Project 1", isDisplayed: true },
    { id: 2, src: "/assets/projects_component/proj1/proj1_pic3.jpg", title: "Cool Project 2", isDisplayed: false },
    { id: 3, src: "/assets/projects_component/proj1/proj1_pic2.jpg", title: "Cool Project 3", isDisplayed: false },
    { id: 4, src: "/assets/projects_component/proj1/proj1_pic1.jpg", title: "Cool Project 4", isDisplayed: false },
    { id: 5, src: "/assets/projects_component/proj1/proj1_pic2.jpg", title: "Cool Project 5", isDisplayed: false },
    { id: 6, src: "/assets/projects_component/proj1/proj1_pic3.jpg", title: "Cool Project 6", isDisplayed: false },
    { id: 7, src: "/assets/projects_component/proj1/proj1_pic1.jpg", title: "Cool Project 7", isDisplayed: false },
  ]

  constructor() { }

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
