import { DbConfig } from '../db-config/db-config'
import { JsonDB } from 'node-json-db';
import { DbProjectsRepo } from './db-projects-repo'
import { ProjectsDTO } from '../../../src/app/shared_daos/Projects/ProjectsDTO';

export class ProjectService{
    private _dbConfig:DbConfig;
    private _dbConnection:JsonDB;
    private _dbRepo:DbProjectsRepo;

    constructor(){
        this._dbConfig = new DbConfig();
        this._dbConnection = this._dbConfig.getDbConnectionGivenDbName("projects");
        this._dbRepo = new DbProjectsRepo(this._dbConnection);
    }

    public getAllProjects():any{
        return this._dbRepo.findAll();
    }

    public saveProject(project:ProjectsDTO){
        this._dbRepo.save(project);
    }


}