import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProjectPictureDTO } from "shared_daos/Projects/ProjectPictureDTO";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit {

  @Input("pictures") projectPictures:Array<ProjectPictureDTO>;

  constructor() { }

  ngOnInit() {
  }


  handledDifferentPicture(id): void {
    this.projectPictures = this.projectPictures.slice().map(pic => {
      if (pic.id === id)
        pic.isDisplayed = true;
      else
        pic.isDisplayed = false;
      return pic;
    });
  }

  handleNextPrevPictureSelect(type) {
    let pictureSlidesLenght = this.projectPictures.length;
    let currentPicIndex = this.projectPictures.findIndex(pic => pic.isDisplayed === true);
    switch (type) {
      case "PREV": {
        let foundIndex = 0;
        if (currentPicIndex === 0)
          foundIndex = pictureSlidesLenght - 1;
        else foundIndex = currentPicIndex - 1

        this.projectPictures = this.projectPictures.slice().map((pic, index) => {
          if (index === foundIndex)
            pic.isDisplayed = true;
          else
            pic.isDisplayed = false;
          return pic;
        });
        return;
      }
      case "NEXT": {
        let foundIndex = 0;
        if (currentPicIndex === pictureSlidesLenght - 1)
          foundIndex = 0
        else foundIndex = currentPicIndex + 1

        this.projectPictures = this.projectPictures.slice().map((pic, index) => {
          if (index === foundIndex)
            pic.isDisplayed = true;
          else
            pic.isDisplayed = false;
          return pic;
        });
        return;
      }
    }
  }

}
