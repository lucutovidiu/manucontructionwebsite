import { Controller, Get, Post, HttpCode, Body, Put, Param, Delete } from '@nestjs/common';
import { ProjectService } from '../../db-module/projects-service/projects-service';
import { ProjectsDTO } from '../../../src/app/shared_daos/Projects/ProjectsDTO';

@Controller('/projects')
export class HelloController {
    
    constructor(private projectService:ProjectService){

    }

    @Get()
    @HttpCode(200)
    findAllProjects(){
        return this.projectService.getAllProjects();
    }

    @Get("project/:id")
    @HttpCode(200)
    findProjectById(@Param("id") id:string){
        return this.projectService.getProjectById(id);
    }

    @Post("/create-project")
    @HttpCode(201)
    createNewProject(@Body() project:ProjectsDTO){
        return this.projectService.saveProject(project);
    }

    @Put("/update-project/:id")
    @HttpCode(200)
    updateProject(@Param("id") id:string,@Body() project: ProjectsDTO){
        return this.projectService.updateProject(project,id);
    }

    @Delete("/delete-project/:id")
    @HttpCode(200)
    deleteRecord(@Param("id") id){
        return this.projectService.deleteProject(id);
    }
}
