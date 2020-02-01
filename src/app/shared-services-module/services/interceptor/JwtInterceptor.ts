// httpSetHeaders.interceptor.ts
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JWT } from '../auth-service/JwtValues';

@Injectable({
    providedIn: "root"
})
export class JwtInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (typeof sessionStorage != "undefined") {
            request = request.clone({ headers: request.headers.set('Authorization',"Bearer "+ sessionStorage.getItem(JWT.JWT_TOKEN)) });
        }
        return next.handle(request);


        // return next.handle(request).pipe(
        //     map((event: HttpEvent<any>) => {
        //         if (event instanceof HttpResponse) {
        //             console.log('event', event);
        //         }
        //         return event;
        //     }),
        //     catchError((error: HttpErrorResponse) => {
        //         let data = {};
        //         data = {
        //             domain: error.domain,
        //             message: error.message,
        //             reason: error.reason
        //         };
        //         console.log(data);
        //         return throwError(error);
        //     }));
    }
}
