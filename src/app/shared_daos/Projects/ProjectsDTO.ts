class WorkCharacteristics{
    workSurface: number;
    workType: string;
}

export class ProjectsDTO {
    id?: string;
    title: string;
    description: string;
    locationArea: string;
    characteristics: WorkCharacteristics;
    imageSrc: Array<string>;
}