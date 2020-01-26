import { ForbiddenException } from '@nestjs/common';

import { JsonDB } from 'node-json-db';
import { isNull } from 'util';
import { ProjectsDTO } from '../../../src/app/shared_daos/Projects/ProjectsDTO'

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
        if (typeof this.checkConnection() !== "undefined") {
           return this._dbConnection.getData("/projects");
        } else {
            console.log(this._className, "No connection found");
        }
    }

    // Pushing the data into the database
    // With the wanted DataPath
    // By default the push will override the old value
    public save(project: ProjectsDTO) {
        if (this.checkConnection()) {
            this._dbConnection.push("/projects", project);
        } else {
            console.log(this._className, "No connection found");
        }
    }
}