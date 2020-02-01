import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
import { NavBarValues } from 'app_module/shared_daos/navbar/NavBarValues';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService, public router: Router) {
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isUserAuthenticated)
            return true;
        else {
            this.router.navigate([NavBarValues.LOGIN]);
            return false;
        }
    }
}