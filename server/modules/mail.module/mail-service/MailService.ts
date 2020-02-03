const mailer = require("nodemailer");

import { ContactFormData } from "../../../../src/app/shared_daos/contactPage/ContactFormData"
import { UploadResultDto } from "../../db-module/projects-service/daos/UploadResult";

export class MailService {

    private getTransporter(): any {
        let transporter = mailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EmailUserName,
                pass: process.env.EmailPassword
            }
        });
        return transporter;
    }

    private mailData(data: MailData): any {
        let mailOptions = {
            from: process.env.EmailFromUserName,
            to: process.env.EmailToUserName,
            subject: data.emailSubject,
            text: data.emailMsg,
            html: data.emailMsg
        };
        return mailOptions;
    }

    public async convertAndSendEmail(contactFormData: ContactFormData) {
        let mailData:MailData = this.convertFormDataToMailData(contactFormData);
        let result:UploadResultDto = await this.sendMail(mailData);
        return result;
        // console.log(process.env);
        // console.log(this.convertFormDataToMailData(contactFormData));
        // return this.convertFormDataToMailData(contactFormData);
    }

    private convertFormDataToMailData(contactFormData: ContactFormData) {
        let emailSubject = "Mesaj nou Lazur Concept";
        let emailMsg = `
        <h2> De La:  </h2>
        <table>
            <tr> 
                <th>Nume</th>
                <th>${contactFormData.fullName}</th>
            </tr>
            <tr>
                <th>Email</th>
                <th>${contactFormData.eMail}</th>
            </tr>       
            <tr>
                <th>phoneNumber</th>
                <th>${contactFormData.phoneNumber}</th>
            </tr>       
        </table>
        <h4> Mesaj <h4>
        <p>${contactFormData.message}</p>        `
        return new MailData(emailSubject, emailMsg);
    }

    public sendMail(data: MailData):Promise<UploadResultDto> {
       return new Promise((res, rej) => {
            let transporter = this.getTransporter();

            let mailData = this.mailData(data);

            transporter.sendMail(mailData, function (err) {
                if (err) {
                    console.log("err:", err);
                    rej(new UploadResultDto(false,"server error"));
                } else {
                    console.log("Email Sent");
                    res(new UploadResultDto(true,"Email Sent"));
                    // console.log("email send:", info);
                }
            });
        });
    }
}

export class MailData {
    emailSubject: string;
    emailMsg: string;
    constructor(emailSubject, emailMsg) {
        this.emailSubject = emailSubject;
        this.emailMsg = emailMsg;
    }
}