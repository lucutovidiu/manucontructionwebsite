import { Controller, Post, Body, Delete, Put, Get, Patch, UseGuards } from "@nestjs/common";

import { User } from '../../../src/app/shared_daos/User'
import { UsersService } from "../../modules/db-module/users-service/users.service";
import { AuthService } from '../../modules/auth-module/auth-service/auth-service'
import { AuthResponseDto } from "../../modules/db-module/users-service/dto/auth-response-dto";
import { UpdateUserDto } from "../../modules/db-module/users-service/dto/update-user";
import { AuthGuard } from "../../modules/auth-module/auth-controller/auth.guard";

@Controller("/login")
export class LoginController {
    constructor(private userService: UsersService, private authSevice: AuthService) {
    }

    @Post()
    public async authenticateUser(@Body() user: User) {
        let userAuth: AuthResponseDto = this.userService.checkUserExistInDB(user);
        if (userAuth.wasSuccesfull) {
            userAuth.jwtToken = this.authSevice.generateJWTToken({ ...userAuth });
            return userAuth;
        } else {
            return userAuth;
        }
    }

    @Get("/getAllUsers")
    @UseGuards(AuthGuard)
    public async getAllUsers() {
        return this.userService.findAllUsers();
    }

    @Put("/save")
    @UseGuards(AuthGuard)
    public async saveUserIntoDB(@Body() user: User) {
        return this.userService.saveUser(user);
    }

    @Delete("/delete")
    @UseGuards(AuthGuard)
    public async deleteUserById(@Body() user: User) {
        return this.userService.removeUserById(user);
    }

    @Patch("/update")
    @UseGuards(AuthGuard)
    public async updateUser(@Body() user: UpdateUserDto) {
        return this.userService.updateUser(user);
    }
}