import { Injectable } from '@nestjs/common';


export class User{
    id:number;
    username:string;
    lastname:string;

    constructor(id:number,username:string,lastname:string){
        this.id=id;
        this.username=username;
        this.lastname=lastname;
    }
}


@Injectable()
export class UserService {

    private users:User[]=[];


    createUser(user:User){
       
        if(user.username!==undefined && user.lastname!==undefined){
             var newuser=new User(this.users.length,user.username,user.lastname);
             this.users.push(newuser);
             return newuser;
        }
        else{
            return{
                message:"Fatal error"
              }  
        }
     
          
    }


    getAllUser():User[]{
        return this.users;
    }

    getById(id:number):User{
        return this.users.find(user=> user.id===Number(id));
    }

    update(id:number,user:User){
        let userIndex=this.users.findIndex(u=>u.id===Number(id));
        if (userIndex === -1) {
            return {message:"User not found"}
        }
        this.users[userIndex]=new User(Number(id),user.username,user.lastname);
        return {
            message:"User has been updated succesfuly",
            id:id
        }
    }

    deleteUser(id:number){
        this.users=this.users.filter(u=> u.id!==Number(id));
        return{
            message:"User has been deleted succesfuly"
        }
    }


}
