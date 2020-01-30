import { DbConfig } from '../db-config/db-config'
import { JsonDB } from 'node-json-db';
import { DbProjectsRepo } from './db-projects-repo'
import { ProjectsDTO } from '../../../../src/app/shared_daos/Projects/ProjectsDTO';
import { DbPathsEnum } from '../db-config/DbPathsEnum';

export class ProjectService{
    private _dbConfig:DbConfig;
    private _dbConnection:JsonDB;
    private _dbRepo:DbProjectsRepo;

    constructor(){
        this._dbConfig = new DbConfig();
        this._dbConnection = this._dbConfig.getDbConnectionGivenDbName(DbPathsEnum.PROJECTS);
        this._dbRepo = new DbProjectsRepo(this._dbConnection);
    }

    public getAllProjects():any{
        return this._dbRepo.findAll();
    }

    public getProjectById(id:string):any{
        return this._dbRepo.findById(id);
    }

    public saveProject(project:ProjectsDTO){
        return this._dbRepo.save(project);
    }

    public updateProject(project:ProjectsDTO,id:string){
        return this._dbRepo.updateById(project,id);
    }

    public deleteProject(id:string){
        return this._dbRepo.deleteById(id);
    }


}