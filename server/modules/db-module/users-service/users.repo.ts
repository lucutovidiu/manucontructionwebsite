import { JsonDB } from "node-json-db";
const uuidv4 = require('uuid/v4');

import { DbPathsEnum } from "../db-config/DbPathsEnum";
import { isNullOrUndefined } from "util";
import { User } from "../../../../src/app/shared_daos/User";
import { NotFoundException } from "@nestjs/common";
import { AuthResponseDto } from "./dto/auth-response-dto";
import { UpdateUserDto } from "./dto/update-user";

export class UsersRepo {
    private _dbConnection: JsonDB = null;
    private _className = "[DbUsersRepo] :";

    constructor(jsonDB: JsonDB) {
        this._dbConnection = jsonDB;
    }

    public findByUser(user: User): AuthResponseDto {
        let response: AuthResponseDto = new AuthResponseDto();
        if (this.checkConnection()) {
            try {
                let allUsers: User[] = Object.values(this._dbConnection.getData(DbPathsEnum.USERS));
                let foundUser: User = allUsers.find(u => u.userName == user.userName && u.password == user.password);
                if (foundUser) {
                    response.userName = foundUser.userName;
                    response.wasSuccesfull = true;
                    response.message = "User Succesfullt authenticated";
                    return response;
                } else {
                    response.wasSuccesfull = false;
                    response.message = "Invalid User";
                    return response;
                }
            } catch (e) {
                response.wasSuccesfull = false;
                response.message = "internal error";
                return response;
            }
        } else {
            console.log(this._className, "No connection found");
            response.wasSuccesfull = false;
            response.message = "internal error";
            return response;
        }
    }

    public save(user: User): any {
        if (this.checkConnection()) {
            try {
                let allUsers: User[] = Object.values(this._dbConnection.getData(DbPathsEnum.USERS));
                let foundUser: User = allUsers.find(u => u.userName == user.userName && u.password == user.password);
                if (foundUser) {                    
                    return "false";
                } else {
                    let userId = "user-" + uuidv4();
                    return this.insertOrUpdateUser(user, userId);
                }
            } catch (e) {
                console.log(this._className, "Empty DB so saving user to DB");
                let userId = "user-" + uuidv4();
                return this.insertOrUpdateUser(user, userId);
            }
        } else {
            console.log(this._className, "No connection found");
            return "false";
        }
    }

    public findAll(){
        if (this.checkConnection()) {
            try {
                let users = this._dbConnection.getData(DbPathsEnum.USERS);
                return users;
            } catch (e) {
                console.log(this._className, "Empty DB so saving user to DB");
            }
        } else {
            console.log(this._className, "No connection found");
            return "false";
        }
    }

    public updateByName(user: UpdateUserDto): any {
        if (this.checkConnection()) {
            try {
                let allUsers: User[] = Object.values(this._dbConnection.getData(DbPathsEnum.USERS));
                let foundUser: User = allUsers.find(u => u.userName == user.userName && u.password == user.prevPassword);
                if (foundUser) {
                    this.removeByName(foundUser);
                    let userId = "user-" + uuidv4();
                    return this.insertOrUpdateUser(new User(user.userName,user.newPassword), userId);
                }
            } catch (e) {
                console.log(this._className, "Error Updateing User to DB");
            }
        } else {
            console.log(this._className, "No connection found");
            return "false";
        }
    }

    public removeByName(user: User): any {

        if (this.checkConnection()) {
            let allUsers = this._dbConnection.getData(DbPathsEnum.USERS);
            let userKeys: string[] = Object.keys(allUsers);
            userKeys.forEach(key => {
                let u: User = allUsers[key];
                if (u.userName == user.userName && u.password == user.password) {
                    try {
                        let pushPath = DbPathsEnum.USERS + key;
                        this._dbConnection.delete(pushPath);
                        return "true";
                    } catch (e) {
                        console.log(this._className, "User hasn't been deleted : ", e);
                        throw new NotFoundException("User hasn't been deleted");
                    }
                }
            })
        } else {
            console.log(this._className, "No project found");
            return "false";
        }
    }

    private insertOrUpdateUser(user: User,userId:string): any {
        let path  = DbPathsEnum.USERS + userId;
        this._dbConnection.push(path,user);
    }

    private checkConnection(): boolean {
        if (!isNullOrUndefined(this._dbConnection)) {
            return true;
        } else {
            return false;
        }
    }
}

