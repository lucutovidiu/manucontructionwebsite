import { Controller, Get, Post, HttpCode, Body, Put, Param, Delete, UseGuards, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FilesInterceptor } from "@nestjs/platform-express"

import { ProjectService } from '../../modules/db-module/projects-service/projects-service';
import { ProjectsDTO } from '../../../src/app/shared_daos/Projects/ProjectsDTO';
import { AuthGuard } from '../../modules/auth-module/auth-controller/auth.guard';

@Controller('/projects')
export class HelloController {

    constructor(private projectService: ProjectService) {
    }

    @Get()
    @HttpCode(200)
    async findAllProjects() {
        return this.projectService.getAllProjects();
    }

    @Get("project/:id")
    @HttpCode(200)
    async findProjectById(@Param("id") id: string) {
        return this.projectService.getProjectById(id);
    }

    @Post("/create-project")
    @HttpCode(201)
    @UseGuards(AuthGuard)
    async createNewProject(@Body() project: ProjectsDTO) {
        return this.projectService.saveProject(project);
    }

    @Post('/create-project/uploadpicture')
    @UseInterceptors(FilesInterceptor('projImages'))
    @UseGuards(AuthGuard)
    async uploadPicture(@UploadedFiles() files) {
        return this.projectService.convertAndSaveImage(files).then(res => {
            return res;
        })
    }

    @Put("/update-project/:id")
    @HttpCode(200)
    @UseGuards(AuthGuard)
    async updateProject(@Param("id") id: string, @Body() project: ProjectsDTO) {
        return this.projectService.updateProject(project, id);
    }

    @Delete("/delete-project/:id")
    @HttpCode(200)
    @UseGuards(AuthGuard)
    async deleteRecord(@Param("id") id) {
        return this.projectService.deleteProject(id);
    }
}
