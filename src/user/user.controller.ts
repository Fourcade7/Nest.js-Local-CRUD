import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { User, UserService } from './user.service';

@Controller('user')
export class UserController {


    constructor(private readonly userService:UserService){}


    @Post("create")
    createUser(@Body() user:User){
        return this.userService.createUser(user);
    }


    @Get("users")
    getAllUsers():User[]{
        return this.userService.getAllUser();
    }


    @Get("getby/:id")
    getById(@Param("id") id:number):User{
        return this.userService.getById(id);
    }

    @Patch("update/:id")
    updateUser(@Param("id") id:number,@Body() user:User):object{
       return this.userService.update(id, user);
    }

    @Delete("delete/:id")
    deleteUser(@Param("id") id:number){
        return this.userService.deleteUser(id);
    }






}
