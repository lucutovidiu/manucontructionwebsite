import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { HelloController } from './src/projects/projects.controller';
import { NotFoundExceptionFilter } from './src/catchAllRoutes/NotFoundExceptionFilter'
import { DbModule } from './db-module/db.module'

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: false
    }),
    DbModule
  ],
  controllers: [HelloController, NotFoundExceptionFilter]
})
export class ApplicationModule { }
