import {Observable, of} from "rxjs";

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


export function getMockProjects(): Observable<Array<ProjectsDTO>> {
  return of([
    {
      "id": "1",
      "title": "Modern Residential Complex",
      "description": "A premium residential project featuring state-of-the-art amenities and sustainable construction practices.",
      "locationArea": "Downtown Area, Cityville",
      "characteristics": {
        "workSurface": 5000,
        "workType": "Residential Construction"
      },
      "imageSrc": [
        "https://picsum.photos/800/600?random=1",
        "https://picsum.photos/800/600?random=2",
        "https://picsum.photos/800/600?random=3",
        "https://picsum.photos/800/600?random=4",
        "https://picsum.photos/800/600?random=5",
      ]
    },
    {
      "id": "2",
      "title": "Commercial Office Tower",
      "description": "An iconic office tower designed with energy-efficient systems and modern workspaces.",
      "locationArea": "Business District, Metropolis",
      "characteristics": {
        "workSurface": 15000,
        "workType": "Commercial Construction"
      },
      "imageSrc": [
        "https://picsum.photos/800/600?random=6",
        "https://picsum.photos/800/600?random=7",
        "https://picsum.photos/800/600?random=8",
        "https://picsum.photos/800/600?random=9",
        "https://picsum.photos/800/600?random=10",
        "https://picsum.photos/800/600?random=11",
      ]
    },
    {
      "id": "3",
      "title": "Highway Expansion Project",
      "description": "A major infrastructure project aimed at expanding the existing highway to improve traffic flow.",
      "locationArea": "Highway 17, Rural County",
      "characteristics": {
        "workSurface": 20000,
        "workType": "Infrastructure Development"
      },
      "imageSrc": [
        "https://picsum.photos/800/600?random=12",
        "https://picsum.photos/800/600?random=13",
        "https://picsum.photos/800/600?random=14",
        "https://picsum.photos/800/600?random=15",
        "https://picsum.photos/800/600?random=16",
        "https://picsum.photos/800/600?random=17",
      ]
    },
    {
      "id": "4",
      "title": "Urban Park Development",
      "description": "A green space project focused on creating a vibrant and sustainable urban park.",
      "locationArea": "Central Park Avenue, Greentown",
      "characteristics": {
        "workSurface": 10000,
        "workType": "Landscaping and Urban Design"
      },
      "imageSrc": [
        "https://picsum.photos/800/600?random=18",
        "https://picsum.photos/800/600?random=19",
        "https://picsum.photos/800/600?random=20",
        "https://picsum.photos/800/600?random=21",
        "https://picsum.photos/800/600?random=22",
        "https://picsum.photos/800/600?random=23",
      ]
    },
    {
      "id": "5",
      "title": "Luxury Hotel Construction",
      "description": "A world-class luxury hotel with contemporary designs and cutting-edge construction technology.",
      "locationArea": "Seafront Boulevard, Beachside City",
      "characteristics": {
        "workSurface": 8000,
        "workType": "Hospitality Construction"
      },
      "imageSrc": [
        "https://picsum.photos/800/600?random=24",
        "https://picsum.photos/800/600?random=25",
        "https://picsum.photos/800/600?random=26",
        "https://picsum.photos/800/600?random=27",
        "https://picsum.photos/800/600?random=28",
        "https://picsum.photos/800/600?random=29",
        "https://picsum.photos/800/600?random=30",
      ]
    }
  ]);
}
