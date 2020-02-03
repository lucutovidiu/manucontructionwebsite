import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { ContactFormData } from 'app_module/shared_daos/contactPage/ContactFormData';
import { environment } from "../../../../environments/environment"

@Injectable({
    providedIn: "root"
})
export class EmailService{

    constructor(private http:HttpClient){}

    public sendEmail(serverFormData:ContactFormData){
        return this.http.post(environment.email.emailSendEndpoint,serverFormData);
    }
}