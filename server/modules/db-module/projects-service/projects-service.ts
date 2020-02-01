import { JsonDB } from 'node-json-db';
var Jimp = require('jimp');

import { DbConfig } from '../db-config/db-config'
import { DbProjectsRepo } from './db-projects-repo'
import { DbPathsEnum } from '../db-config/DbPathsEnum';
import { ProjectsDTO } from '../../../../src/app/shared_daos/Projects/ProjectsDTO';
import { UploadResultDto } from './daos/UploadResult';
import { ReceivedFileTo } from './daos/ReceivedFileTo';

export class ProjectService {
    private _dbConfig: DbConfig;
    private _dbConnection: JsonDB;
    private _dbRepo: DbProjectsRepo;

    private _tempFileLocationFolder: string = "./src/assets/projects_component/temp/";

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

    public async convertAndSaveImage(files: Array<ReceivedFileTo>) {
        return new Promise((res, rej) => {
            for (let file of files) {                
                Jimp.read(file.buffer, (err, pic) => {
                    if (err) {
                        rej({ wasSuccesfull: false, message: "Server Error" });
                    }
                    pic
                        .quality(80) // set JPEG quality
                        .resize(Jimp.AUTO, 800) // resize the height to 800 and scale the width accordingly
                        .write(this._tempFileLocationFolder + file.originalname); // save                    
                });
            }
            res(new UploadResultDto(true, "Succesfully uploaded"));
        })
    }
}