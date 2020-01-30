import { DbConfig } from "../db-config/db-config";
import { JsonDB } from "node-json-db";
import { UsersRepo } from "./users.repo";
import { DbPathsEnum } from "../db-config/DbPathsEnum";
import { User } from "../../../../src/app/shared_daos/User";
import { AuthResponseDto } from "./dto/auth-response-dto";
import { UpdateUserDto } from "./dto/update-user";

export class UsersService {
    private _dbConfig: DbConfig;
    private _dbConnection: JsonDB;
    private _dbUsersRepo: UsersRepo;

    constructor() {
        this._dbConfig = new DbConfig();
        this._dbConnection = this._dbConfig.getDbConnectionGivenDbName(DbPathsEnum.USERS);
        this._dbUsersRepo = new UsersRepo(this._dbConnection);
    }

    public findAllUsers(){
        return this._dbUsersRepo.findAll();
    }

    public checkUserExistInDB(user: User): AuthResponseDto {
        return this._dbUsersRepo.findByUser(user);
    }

    public saveUser(user: User): any {
        return this._dbUsersRepo.save(user);
    }

    public removeUserById(user: User): any {
        return this._dbUsersRepo.removeByName(user);
    }

    public updateUser(user: UpdateUserDto){
        this._dbUsersRepo.updateByName(user);
    }
}