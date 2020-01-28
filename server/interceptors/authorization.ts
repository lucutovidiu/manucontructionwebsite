import { NestMiddleware, Inject, Injectable } from "@nestjs/common";
import { Request,Response,} from 'express-serve-static-core'

export class AuthorizationInterceptor implements NestMiddleware{
    use(req: any, res: any, next: () => void) {
        throw new Error("Method not implemented.");
    }

    constructor(){
        console.log("Auth initiated")
    }

    
    
}