import { Controller, Post, Body } from "@nestjs/common";

import { ContactFormData } from "../../../src/app/shared_daos/contactPage/ContactFormData"
import { MailService } from '../../modules/mail.module/mail-service/MailService'

@Controller("email")
export class EmailController {

    constructor(private mailService: MailService) { }

    @Post("sendEmail")
    public async sendEmail(@Body() emailData: ContactFormData) {
        return this.mailService.convertAndSendEmail(emailData);
    }
}

