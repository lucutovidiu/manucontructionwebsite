import { CanActivate, ExecutionContext, HttpException, HttpStatus, Inject, Injectable, } from '@nestjs/common';
import { Request, Response } from 'express-serve-static-core'

import { JWTProcessor } from './jwt.token-processor'

export class AuthGuard implements CanActivate {

    private jwtService: JWTProcessor = new JWTProcessor();

    constructor() {
        let token = this.jwtService.generateJWTToken({ data: "ce mai faci?" }, "3h");
        console.log(token)
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        const response: Response = context.switchToHttp().getResponse();
        return true;
    }
    asyncvalidateRequest(request) {
        // throw new HttpException("invalid token",HttpStatus.GATEWAY_TIMEOUT)
    }
}
