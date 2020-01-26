import { Controller, Get } from '@nestjs/common';
import { ProjectService } from '../../db-module/projects-service/projects-service';

@Controller('/hello')
export class HelloController {
    
    constructor(private projectService:ProjectService){

    }

    @Get()
    getAll(){
        return this.projectService.getAllProjects();
    }

    @Get("/populateProject")
    populateDB(){
        let proj={
            id: 1, title: "Dummy Cool Project 1",
            description: "Dummy - Was a very big project where we had work from piping to electricity, painting and much more, all ended very well and with a big positive from the customer.",
            locationArea: "Dummy - Levallois-Perret 92100, France",
            characteristics: { workSurface: 1000, workType: "Dummy - Works made delicate by its classification" },
            imageSrc: [
                "/assets/projects_component/proj1/proj1_pic1.jpg",
                "/assets/projects_component/proj1/proj1_pic2.jpg",
                "/assets/projects_component/proj1/proj1_pic3.jpg",
                "/assets/projects_component/proj1/proj1_pic4.jpg",
            ]
        };
        this.projectService.saveProject(proj);
    }
}
