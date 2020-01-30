export interface JWTDataObject{
    data: string;
}

export class JWTTokenTo{
    jwtData: string;
    secret:string;
    expiresIn?: string='1h';
    algorithm?:string='RS256';
}

export class TokenValidationReponse{
    isValid:boolean;
    errorMassage?:string;
    exceptionMassage?:string;
    decodedToken?:string;
}