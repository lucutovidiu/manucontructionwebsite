import { JsonDB } from 'node-json-db';
var Jimp = require('jimp');
var fs = require('fs');

import { DbConfig } from '../db-config/db-config'
import { DbProjectsRepo } from './db-projects-repo'
import { DbPathsEnum } from '../db-config/DbPathsEnum';
import { ProjectsDTO } from '../../../../src/app/shared_daos/Projects/ProjectsDTO';
import { UploadResultDto } from './daos/UploadResult';
import { ReceivedFilesTo } from './daos/ReceivedFileTo';

export class ProjectService {
    private _dbConfig: DbConfig;
    private _dbConnection: JsonDB;
    private _dbRepo: DbProjectsRepo;

    private _tempFileLocationFolder: string = "src/assets/projects_component/temp/";

    constructor() {
        this._dbConfig = new DbConfig();
        this._dbConnection = this._dbConfig.getDbConnectionGivenDbName(DbPathsEnum.PROJECTS);
        this._dbRepo = new DbProjectsRepo(this._dbConnection);
    }

    public getAllProjects(): any {
        return this._dbRepo.findAll();
    }

    public getProjectById(id: string): any {
        return this._dbRepo.findById(id);
    }

    public saveProject(project: ProjectsDTO) {
        return this._dbRepo.save(project);
    }

    public updateProject(project: ProjectsDTO, id: string) {
        return this._dbRepo.updateById(project, id);
    }

    public deleteProject(id: string) {
        return this._dbRepo.deleteById(id);
    }

    public async convertAndSaveImage(files: Array<ReceivedFilesTo>) {
        return new Promise((res, rej) => {
            for (let file of files) {
                Jimp.read(file.path)
                    .then(img => {
                        img
                            .quality(85) // set JPEG quality
                            .resize(Jimp.AUTO, 800) // resize the height to 800 and scale the width accordingly
                            .write(this._tempFileLocationFolder + file.originalname); // save      
                            fs.unlinkSync(file.path); //remove old file from the system  
                    })
                    .catch(() => {
                        rej({ wasSuccesfull: false, message: "Server Error" });
                    });
            }
            res(new UploadResultDto(true, "Succesfully uploaded"));
        })
    }
}