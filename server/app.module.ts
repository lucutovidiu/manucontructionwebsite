import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';

import { join } from 'path';
import { HelloController } from './controllers/projects-controller/projects.controller';
import { NotFoundExceptionFilter } from './controllers/catch-all-routes-controller/NotFoundExceptionFilter'
import { DbModule } from './modules/db-module/db.module'
import { AuthModule } from './modules/auth-module/auth.module'
import { LoginController } from './controllers/login-controller/login.controller'


@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: false
    }),
    DbModule,
    AuthModule
  ],
  providers:[
  ],
  controllers: [HelloController, LoginController, NotFoundExceptionFilter]
})
export class ApplicationModule{}
