import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';

import { join } from 'path';
import { HelloController } from './controllers/projects-controller/projects.controller';
import { NotFoundExceptionFilter } from './controllers/catch-all-routes-controller/NotFoundExceptionFilter'
import { DbModule } from './modules/db-module/db.module'
import { AuthModule } from './modules/auth-module/auth.module'
import { LoginController } from './controllers/login-controller/login.controller'
import { EmailController } from './controllers/email/email.controller';
import { MailModule } from './modules/mail.module/mail.module';


@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: false
    }),
    DbModule,
    AuthModule,
    MailModule
  ],
  providers: [
  ],
  controllers: [HelloController, LoginController, EmailController, NotFoundExceptionFilter]
})
export class ApplicationModule { }
