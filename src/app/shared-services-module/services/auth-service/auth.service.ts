import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { JWT } from './JwtValues';
import { User } from 'app_module/shared_daos/User';
import { AuthRepo } from 'shared_services/repositories/Auth/AuthRepo'
import { Observable, Subject } from 'rxjs';
import { AuthResponseDto } from '../../../../../server/modules/db-module/users-service/dto/auth-response-dto';
import { Router } from '@angular/router';
import { NavBarValues } from 'app_module/shared_daos/navbar/NavBarValues';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _jwtToken: string = null;
    private isUserAuthenticated$ = new Subject<AuthResponseDto>();

    constructor(private authRepo: AuthRepo, private router: Router) { }

    public get isUserAuthenticated(): boolean {
        return this.isJwtTokenExpired();
    }

    public get jwtToken(): string {
        if (typeof sessionStorage !== "undefined") {
            let sessionToken = sessionStorage.getItem(JWT.JWT_TOKEN);
            if (sessionToken) {
                this._jwtToken = sessionToken;
            }
        }
        return this._jwtToken;
    }

    public set jwtToken(jwtToken: string) {
        if (jwtToken) {
            if (typeof sessionStorage !== "undefined") {
                sessionStorage.setItem(JWT.JWT_TOKEN, jwtToken);
            }
            this._jwtToken = jwtToken;
        }
    }

    public getAuthSubscriber(): Observable<AuthResponseDto> {
        return this.isUserAuthenticated$.asObservable();
    }

    public fetchUserAuthentication(user: User) {
        this.authRepo.getAuth(user).then((user: AuthResponseDto) => {
            if (user.wasSuccesfull) {
                this.jwtToken = user.jwtToken;
                this.isUserAuthenticated$.next(user);
            } else
                this.isUserAuthenticated$.next(user);
        })
    }

    public isJwtTokenExpired(): boolean {
        if (this.jwtToken) {
            const helper = new JwtHelperService();
            // let decoded = helper.decodeToken(this.jwtToken);
            try {
                return !helper.isTokenExpired(this.jwtToken);
            } catch (e) {
                return false;
            }
        } else
            return false;
    }

    public logout() {
        if (typeof sessionStorage !== "undefined") {
            sessionStorage.removeItem(JWT.JWT_TOKEN);
            this._jwtToken = "";
            this.router.navigate([NavBarValues.HOME])
        }
    }
}