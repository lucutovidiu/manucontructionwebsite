import { Module } from '@nestjs/common';

import { AuthGuard } from './auth-controller/auth.guard'
import { AuthService } from './auth-service/auth-service';

@Module({
    imports: [
    ],
    providers: [
        AuthGuard,
        AuthService,
    ],
    exports: [
        AuthGuard,
        AuthService
    ],
    controllers: []
})
export class AuthModule { }