import { Request } from "express-serve-static-core";
import { MailService } from '../mail-service/MailService'

const fetch = require("isomorphic-unfetch");


export class LocationService {

    private mailService: MailService;

    private getClientIPAddress(req: Request) {
        return (
            (req.headers["x-forwarded-for"] || "").split(",").pop() ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress
        );
    }

    private async getGeoLocation(ip) {
        // https://ipapi.co/109.99.10.27/json/
        try {
            let data = await fetch(`https://ipapi.co/${ip}/json/`);
            let result = await data.json();
            return result;
        } catch (err) {
            console.log("GEO LOCATION ERROR: ", err);
        }
    }

    public async sendGeoLocToMail(req: Request) {
        let geoLoc = await this.getGeoLocation(this.getClientIPAddress(req));
        let geoLocation = JSON.stringify(geoLoc);
        if (!geoLoc.ip.includes("::1") && geoLocation.includes("country_name")) {
            try {
                let response = await this.mailService.sendMail({
                    emailSubject: "New Visit",
                    emailMsg: `New Visitor from : <br/><br/> ${this.convertJSONToTable(geoLoc)}`
                });
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        }
    };

    private convertJSONToTable(json) {
        let table = "<table>";
        for (let k in json) {
            table += `
          <tr>
          <th>${k}</th>
          <th>${json[k]}</th>
        </tr>
        `;
        }
        table += "</table>";
        return table;
    }
}

export class UserMessages {
    geoLocation: string;
    type: string;

    constructor(geoLocation, type) {
        this.geoLocation = geoLocation;
        this.type = type;
    }
};