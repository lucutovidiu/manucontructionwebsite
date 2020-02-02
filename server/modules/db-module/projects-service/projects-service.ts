import { JsonDB } from 'node-json-db';
var fs = require('fs');
const resizeImg = require('resize-img');

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
                let inputPicPath = file.path;
                let outputPicPath = this._tempFileLocationFolder + file.originalname;
                resizeImg(fs.readFileSync(inputPicPath), {
                    height: 800
                }).then(image=>{
                    fs.unlinkSync(inputPicPath)
                    fs.writeFileSync(outputPicPath, image);
                    res(new UploadResultDto(true, "Succesfully uploaded"));
                }).catch(err=>{
                    console.log(err);
                    rej({ wasSuccesfull: false, message: "Server Error" });
                });
                // resize({
                //     width: 0,
                //     height:800,
                //     quality:80,
                //     src: inputPicPath,
                //     dst: outputPicPath
                // }).then(()=>{
                //     console.log("okkkkkkkkkkk")
                //     fs.unlinkSync(inputPicPath);
                //     res(new UploadResultDto(true, "Succesfully uploaded"));
                // }).catch((err)=>{
                //     console.log("errrrrrrrrrrrrr")
                //     console.log(err)
                //     rej({ wasSuccesfull: false, message: "Server Error" });
                // })

                // im.resize({
                //     srcPath: inputPicPath,
                //     dstPath: outputPicPath,
                //     height: 800
                // }, function (err, stdout, stderr) {
                //     if (err) {
                //         console.log(err);
                //         rej({ wasSuccesfull: false, message: "Server Error" });
                //     };
                //     fs.unlinkSync(inputPicPath)
                //     res(new UploadResultDto(true, "Succesfully uploaded"));
                // });
            }
        })
    }
}