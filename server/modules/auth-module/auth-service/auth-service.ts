import * as jwt from 'jsonwebtoken';
import { TokenValidationReponse } from '../to-s/jwt-shape';

export class AuthService {

    private _jwt_secret: string = "fall_back_jwt_token"

    private get jwtSecret(): string {
        if (process.env.JWT_SECRET) {
            this._jwt_secret = process.env.JWT_SECRET;
        }
        return this._jwt_secret;
    }

    constructor() {
    }

    public generateJWTToken(data: any, expiresIn?: string, algorithm?: string) {
        console.log("secrect = ", this.jwtSecret)
        let token = jwt.sign({
            ...data
        },
            this.jwtSecret,
            { expiresIn: expiresIn || '1h' },
            { algorithm: algorithm || 'RS256' }
        );
        return token;
    }

    public validateToken(token: string): TokenValidationReponse {
        let response: TokenValidationReponse = new TokenValidationReponse();
        try {
            var decoded = jwt.verify(token.split(" ")[1], this.jwtSecret);
            response.isValid = true;
            response.decodedToken = decoded;
            return response;
        } catch (exeption) {
            response.isValid = false;
            response.errorMassage = "Invalid Token";
            response.exceptionMassage = exeption;
            return response;
        }
    }

    // get the decoded payload ignoring signature, no secretOrPrivateKey needed
    public getDecodedPayload(token): string {
        return jwt.decode(token) || "Could'not decode token, invalid all toughether";
    }
}