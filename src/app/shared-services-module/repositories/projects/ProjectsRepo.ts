import { Injectable } from "@angular/core";
import { ProjectsDTO } from 'app_module/shared_daos/Projects/ProjectsDTO';

@Injectable({
    providedIn: 'root'
})
export class ProjectsRepo {

    private projects: Array<ProjectsDTO> =
        [
            {
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
            },
            {
                id: 2, title: "Stairs Reparation Project",
                description: "Was a fairly complex job, where we had to work indoors and make sure all comes out perfet in the end, we had to paint and much more, all ended very well and with a big positive from the customer.",
                locationArea: "Levallois-Perret 92200, France",
                characteristics: { workSurface: 5, workType: "Works was delicate by its classification" },
                imageSrc: [
                    "/assets/projects_component/proj2/proj2_pic1.jpeg",
                    "/assets/projects_component/proj2/proj2_pic2.jpeg",
                    "/assets/projects_component/proj2/proj2_pic3.jpeg",
                    "/assets/projects_component/proj2/proj2_pic4.jpeg",
                ]
            },
            {
                id: 3, title: "Wardrobe mountion and Painting",
                description: "Fairly complex for mounting new wardrobe and painting it as well, all ended very well and with a big positive from the customer.",
                locationArea: "Levallois-Perret 92300, France",
                characteristics: { workSurface: 4, workType: "Works made delicate by its classification" },
                imageSrc: [
                    "/assets/projects_component/proj3/proj3_pic1.jpeg",
                    "/assets/projects_component/proj3/proj3_pic2.jpeg",
                    "/assets/projects_component/proj3/proj3_pic3.jpeg",
                ]
            }
        ]

    public findAll(): Array<ProjectsDTO> {
        return this.projects.slice();
    }

    public findById(id: number): ProjectsDTO {
        let foundProject = this.projects.filter(project => project.id === id);
        if (foundProject.length > 0)
            return foundProject[0];
        else
            return undefined;
    }
}