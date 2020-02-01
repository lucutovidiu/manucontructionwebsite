import { Injectable } from '@angular/core';
import { User } from 'app_module/shared_daos/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { AuthResponseDto } from '../../../../../server/modules/db-module/users-service/dto/auth-response-dto';

@Injectable({
    providedIn: 'root'
})
export class AuthRepo {
    
    private _httpGetOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient){}

    public getAuth(user: User): Promise<AuthResponseDto>{
        return new Promise((resolve, reject) => {
            this.http.post(environment.auth.LOGIN_ENPOINT,user, this._httpGetOptions).subscribe((user: AuthResponseDto) => {
                if (typeof user !== "undefined") {
                    resolve(user);
                }
            });
        })
    }
}