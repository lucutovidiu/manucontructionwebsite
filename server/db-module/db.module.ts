import { Module } from '@nestjs/common';
import { ProjectService } from './projects-service/projects-service'

@Module({
  imports: [
    
  ],
  providers:[
    ProjectService
  ],
  exports:[
    ProjectService
  ]
})
export class DbModule {}
