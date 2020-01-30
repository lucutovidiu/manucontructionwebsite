import { Module } from '@nestjs/common';
import { ProjectService } from './projects-service/projects-service'
import { UsersService } from './users-service/users.service';

@Module({
  imports: [
    
  ],
  providers:[
    ProjectService,
    UsersService
  ],
  exports:[
    ProjectService,
    UsersService
  ]
})
export class DbModule {}
