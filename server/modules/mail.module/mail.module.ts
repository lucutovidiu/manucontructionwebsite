import { Module } from "@nestjs/common";
import { MailService } from "./mail-service/MailService";
import { LocationService } from "./location-check-service/check-location";

@Module({
    imports:[],
    providers:[MailService,LocationService]
})
export class MailModule{}