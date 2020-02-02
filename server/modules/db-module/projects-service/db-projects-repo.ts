import { JsonDB } from 'node-json-db';
import { isNull } from 'util';
import { DbPathsEnum } from '../db-config/DbPathsEnum';
import { NotFoundException } from '@nestjs/common';
import { ProjectsDTO } from '../../../../src/app/shared_daos/Projects/ProjectsDTO';
import { UploadResultDto } from './daos/UploadResult';
const uuidv4 = require('uuid/v4');

export class DbProjectsRepo {

    private _dbConnection: JsonDB = null;
    private _className = "[DbRepo] :";
    private _projectsBaseLocation = "./src/assets/projects_component/";
    private _projectsTempLocation = "./src/assets/projects_component/temp/"
    private _projectsBaseLocationForDB = "/assets/projects_component/";

    constructor(jsonDB: JsonDB) {
        this._dbConnection = jsonDB;
    }

    private checkConnection(): boolean {
        if (!isNull(this._dbConnection)) {
            this._dbConnection.reload()
            return true;
        } else {
            return false;
        }
    }

    // Get the data from the root
    public findAll(): any {
        if (this.checkConnection()) {
            try {
                return this._dbConnection.getData(DbPathsEnum.PROJECTS);
            } catch (e) {
                throw new NotFoundException("DB error");
            }
        } else {
            console.log(this._className, "No connection found");
        }
    }

    public findById(id: string): any {
        if (this.checkConnection()) {
            try {
                return this._dbConnection.getData(DbPathsEnum.PROJECTS + id);
            } catch (e) {
                throw new NotFoundException("Project Not Found");
            }
        } else {
            console.log(this._className, "No connection found");
        }
    }

    // Pushing the data into the database
    // With the wanted DataPath
    // By default the push will override the old value
    public save(project: ProjectsDTO): UploadResultDto {
        if (this.checkConnection()) {
            let projId = "project" + this.convertDashToUnderscore(uuidv4());
            project.imageSrc = this.createProjectStructure(project, projId)
            let pushPath = DbPathsEnum.PROJECTS + projId;
            try {
                this._dbConnection.push(pushPath, this.updateIdBeforeSavingToDB(project, projId));
                return new UploadResultDto(true, "Project Uploaded Succesfully")
            } catch (e) {
                return new UploadResultDto(false, "Project couldn't be saved");
            }
        } else {
            console.log(this._className, "No connection found");
            return new UploadResultDto(false, "Server Error");
        }
    }

    private createProjectStructure(projectsDTO: ProjectsDTO, projectDir): Array<string> {
        let _newProjectDir = this._projectsBaseLocation + projectDir + "/";
        let _newProjectImages: Array<string> = new Array<string>();
        for (let image of projectsDTO.imageSrc) {
            this.moveFile(this._projectsTempLocation + image, _newProjectDir + this.convertDashToUnderscore(image), _newProjectDir);
            _newProjectImages.push(this._projectsBaseLocationForDB + projectDir + "/" + this.convertDashToUnderscore(image))
        }
        return _newProjectImages;
    }

    private convertDashToUnderscore(str:string){
        return str.replace(/-/g,"l").substr(Math.round(str.length/2),str.length);
    }

    //moves the $file to $dir2
    private moveFile(from, to, todirectory) {
        //include the fs, path modules
        var fs = require('fs');
        var path = require('path');

        //resolve source
        var dest = path.resolve(to);
        //gets file name and adds it to dir2        
        var origin = path.resolve(from);
        var originDirectory = path.resolve(todirectory);
        //create dest if not exists
        if (!fs.existsSync(originDirectory)) {
            fs.mkdirSync(originDirectory);
        }

        fs.rename(origin, dest, (err) => {
            if (err) console.log(err);
            // else console.log('Successfully moved');
        });
    };

    // //copy the $file to $dir2
    // private copyFile(file, dir2) {
    //     //include the fs, path modules
    //     var fs = require('fs');
    //     var path = require('path');

    //     //gets file name and adds it to dir2
    //     var f = path.basename(file);
    //     var source = fs.createReadStream(file);
    //     var dest = fs.createWriteStream(path.resolve(dir2, f));

    //     source.pipe(dest);
    //     source.on('end', function () { console.log('Succesfully copied'); });
    //     source.on('error', function (err) { console.log(err); });
    // };

    private updateIdBeforeSavingToDB(project: ProjectsDTO, newID) {
        return { ...project, id: newID };
    }

    public updateById(project: ProjectsDTO, id: string) {
        if (this.checkConnection()) {
            let pushPath = DbPathsEnum.PROJECTS + id;
            try {
                return this._dbConnection.push(pushPath, project, true);
            } catch (e) {
                throw new NotFoundException("Project hasn't been updated");
            }
        } else {
            console.log(this._className, "No project found");
        }
    }

    public deleteById(id: string) {
        if (this.checkConnection()) {
            let pushPath = DbPathsEnum.PROJECTS + id;
            try {
                return this._dbConnection.delete(pushPath);
            } catch (e) {
                throw new NotFoundException("Project hasn't been deleted");
            }
        } else {
            console.log(this._className, "No project found");
        }
    }
}