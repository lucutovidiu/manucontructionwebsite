import { Controller, Post, Body, Param, Delete, Put, Get, Patch } from "@nestjs/common";

import { User } from '../../../src/app/shared_daos/User'
import { UsersService } from "../../modules/db-module/users-service/users.service";
import { AuthService } from '../../modules/auth-module/auth-service/auth-service'
import { AuthResponseDto } from "../../modules/db-module/users-service/dto/auth-response-dto";
import { UpdateUserDto } from "../../modules/db-module/users-service/dto/update-user";

@Controller("/login")
export class LoginController {
    constructor(private userService: UsersService, private authSevice: AuthService) {
    }

    @Post()
    public authenticateUser(@Body() user:User): AuthResponseDto{
        let userAuth: AuthResponseDto = this.userService.checkUserExistInDB(user);
        if(userAuth.wasSuccesfull){
            userAuth.jwtToken = this.authSevice.generateJWTToken({...userAuth});
            return userAuth;
        }else{
            return userAuth;
        }            
    }

    @Get("/getAllUsers")
    public getAllUsers(){
        return this.userService.findAllUsers();
    }

    @Put("/save")
    public saveUserIntoDB(@Body() user: User){
        this.userService.saveUser(user);
    }

    @Delete("/delete")
    public deleteUserById(@Body() user: User){
        this.userService.removeUserById(user);
    }

    @Patch("/update")
    public updateUser(@Body() user: UpdateUserDto){
        this.userService.updateUser(user);
    }
}