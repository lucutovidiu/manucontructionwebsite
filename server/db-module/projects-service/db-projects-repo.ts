import { JsonDB } from 'node-json-db';
import { isNull } from 'util';
import { ProjectsDTO } from '../../../src/app/shared_daos/Projects/ProjectsDTO'
import { DbPathsEnum } from '../db-config/DbPathsEnum';
import { NotFoundException } from '@nestjs/common';
const uuidv4 = require('uuid/v4');

export class DbProjectsRepo {

    private _dbConnection: JsonDB = null;
    private _className = "[DbRepo] :";

    constructor(jsonDB: JsonDB) {
        this._dbConnection = jsonDB;
    }

    private checkConnection(): boolean {
        if (!isNull(this._dbConnection)) {
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

    public findById(id:string): any {
        if (this.checkConnection()) {
            try {
                return this._dbConnection.getData(DbPathsEnum.PROJECTS+id);
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
    public save(project: ProjectsDTO) {
        if (this.checkConnection()) {
            let projId="project-" + uuidv4();
            let pushPath = DbPathsEnum.PROJECTS + projId;
            try {
                return this._dbConnection.push(pushPath, this.updateIdBeforeSavingToDB(project,projId));
            } catch (e) {
                throw new NotFoundException("Project couldn't be saved");
            }
        } else {
            console.log(this._className, "No connection found");
        }
    }

    private updateIdBeforeSavingToDB(project: ProjectsDTO,newID){
        return {...project,id:newID};
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