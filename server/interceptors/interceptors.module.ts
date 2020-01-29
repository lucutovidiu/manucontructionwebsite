import { Module } from '@nestjs/common';

import { AuthGuard } from './authorization/auth.guard'
import { JWTProcessor } from './authorization/jwt.token-processor';
@Module({
    imports: [
    ],
    providers: [
        AuthGuard
    ],
    exports: [
        AuthGuard
    ]
})
export class AuthModule { }