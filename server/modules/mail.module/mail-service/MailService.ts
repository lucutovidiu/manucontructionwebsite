const mailer = require("nodemailer");
export class MailService {

    private getTransporter():any{
        let transporter = mailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EmailUserName,
                pass: process.env.EmailPassword
            }
        });
        return transporter;
    }

    private mailData(data:MailData):any{
        let mailOptions = {
            from: process.env.EmailFromUserName,
            to: process.env.EmailToUserName,
            subject: data.emailSubject,
            text: data.emailMsg,
            html: data.emailMsg
        };
        return mailOptions;
    }

    public sendMail(data:MailData) {
        new Promise((res, rej) => {
            let transporter = this.getTransporter();

            let mailData = this.mailData(data);           

            transporter.sendMail(mailData, function (err) {
                if (err) {
                    console.log("err:", err);
                    rej("Error Sending Email");
                } else {
                    res("Email SENT");
                    // console.log("email send:", info);
                }
            });
        });
    }
}

export interface MailData{
    emailSubject:string;
    emailMsg: string;
}