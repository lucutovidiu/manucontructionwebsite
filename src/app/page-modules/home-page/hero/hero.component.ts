import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroBackgroundImage:string= "url(/assets/hero-component/hero_pic3.jpg)";
  constructor() { }

  ngOnInit() {
  }

}
