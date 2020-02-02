import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express-serve-static-core'
import { AuthService } from '../auth-service/auth-service';

export class AuthGuard implements CanActivate {

    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    canActivate(context: ExecutionContext): Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        // const response: Response = context.switchToHttp().getResponse();

        return new Promise<boolean>(res => {
            return res(this.asyncvalidateRequest(request));
        });
    }

    asyncvalidateRequest(request: Request) {
        //Authorization
        if (request.headers && request.headers.authorization) {
            let authHeader = request.headers.authorization;
            let tryDecode = this.authService.validateToken(authHeader);
            if (tryDecode.isValid)
                return true;
            else
                return false;
        } else {
            return false;
        }

    }
}
