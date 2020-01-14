import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s linear',
              style({ height: "100%", opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: "100%", opacity: 1 }),
            animate('0.5s linear',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class MenuBarComponent implements OnInit {
  isMobileMenuActive: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  togggleNavMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

}
