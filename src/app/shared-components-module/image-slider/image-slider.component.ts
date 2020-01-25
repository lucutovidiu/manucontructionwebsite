import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { ProjectsDTO } from "app_module/shared_daos/Projects/ProjectsDTO";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit {

  @Input("project") project: ProjectsDTO;
  public displayedPicture: { imgArrayId: number } = { imgArrayId: 0 };

  constructor() {

  }

  ngOnInit() {
  }

  shouldDisplay(picArrayId) {
    if (this.displayedPicture.imgArrayId === picArrayId) {
      return true;
    } else {
      return false;
    }
  }

  handledDifferentPicture(picId): void {
    this.project.imageSrc.forEach((pic, index) => {
      if (index === picId)
        this.displayedPicture = Object.assign({}, { imgArrayId: picId });
    });
  }

  handleScrollDownUpPage(type: string): void {
    switch (type) {
      case "UP": {
        if (window)
          window.scrollBy(0, 50);
        return;
      }
      case "DOWN": {
        if (window)
          window.scrollBy(0, -50);
        return;
      }
    }
  }

  handleNextPrevPictureSelect(type) {
    let pictureSlidesLenght = this.project.imageSrc.length;
    let currentPicIndex = this.displayedPicture.imgArrayId;
    switch (type) {
      case "PREV": {
        let foundIndex = 0;
        if (currentPicIndex === 0)
          foundIndex = pictureSlidesLenght - 1;
        else foundIndex = currentPicIndex - 1

        this.project.imageSrc.forEach((pic, index) => {
          if (index === foundIndex)
            this.displayedPicture = Object.assign({}, { imgArrayId: index });
        });
        return;
      }
      case "NEXT": {
        let foundIndex = 0;
        if (currentPicIndex === pictureSlidesLenght - 1)
          foundIndex = 0
        else foundIndex = currentPicIndex + 1

        this.project.imageSrc.forEach((pic, index) => {
          if (index === foundIndex)
            this.displayedPicture = Object.assign({}, { imgArrayId: index });
        });
        return;
      }
    }
  }
}
