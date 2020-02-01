import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { AuthService } from 'shared_services/services/auth-service/auth.service';
import { NavBarValues } from 'app_module/shared_daos/navbar/NavBarValues';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
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

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  get navBarValues() {
    return NavBarValues;
  }

  togggleNavMenu(): void {
    if (!this.isMobileMenuActive)
      document.body.style.overflow = "hidden";
    else
      document.body.style.overflow = "auto";
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  shouldMenuShowToUser() {
    return this.authService.isUserAuthenticated;
  }

  logout(){
    return this.authService.logout();
  }

}
