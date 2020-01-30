import { CanActivate, ExecutionContext, HttpException, HttpStatus, Inject, Injectable, Dependencies, Controller, Scope, } from '@nestjs/common';
import { Request, Response } from 'express-serve-static-core'
import { AuthService } from '../auth-service/auth-service';

@Controller({scope: Scope.REQUEST})
export class AuthGuard implements CanActivate {

    private authService:AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        const response: Response = context.switchToHttp().getResponse();
        // console.log(request.headers)
        return true;
    }
    asyncvalidateRequest(request) {
        // throw new HttpException("invalid token",HttpStatus.GATEWAY_TIMEOUT)
    }
}
