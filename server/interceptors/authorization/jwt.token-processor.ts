import * as jwt from 'jsonwebtoken';
import { JWTDataObject, JWTTokenTo } from './to-s/jwt-shape';


export class JWTProcessor {

    private _jwtToken: string = "fall_back_jwt_token"

    private get jwtToken(): string {
        if (process.env.JWT_SECRET) {
            this._jwtToken = process.env.JWT_SECRET;
        }
        return this._jwtToken;
    }

    constructor() {
    }

    public generateJWTToken(data: JWTDataObject, expiresIn?: string, algorithm?: string) {
        let jwtToken = this._jwtToken;
        let token = jwt.sign({
            ...data
        },
            "jwtToken",
            { expiresIn: expiresIn || '1h' },
            { algorithm: algorithm || 'RS256' }
        );
        return token;
    }
}