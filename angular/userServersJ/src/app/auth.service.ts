import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./servers/interfaces/client.interface";
import { UsersService } from './users/services/users.service';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private router:Router){}


    //loggedIn:boolean = false;

    isAuthenticated():boolean {
        return JSON.parse(localStorage.getItem("login")||"false");
        //localStorage.getItem("login")==='true'

        // const promise = new Promise<boolean> (
        //     (resolve, reject) => {
        //         setTimeout(() => {
        //             resolve(this.loggedIn);
        //         }, 800);
        //     }
        // );
        //return promise;
    }

    logout() {
        localStorage.setItem("login", "false");
        localStorage.setItem("user", "");
        //this.loggedIn = false;
    }

    
    login(email:string, passwd:string){
        let user!:User;
        //si no encuentra devolverá un objeto vacío
        this.userService.getUserByEmail(email)
        .subscribe({
          next:(resp)=>{
            user = resp[0];
            if(resp.length && user.name == passwd){
                localStorage.setItem("login", "true");
                localStorage.setItem("user", String(user.id));
                //this.loggedIn = true;
                this.router.navigate(['/servers']);
            }else{
                localStorage.setItem("login", "false");
                confirm('usuario o contraseña incorrectos');
                //this.loggedIn = false;
            }
        },
          error:()=>{}
        })
    }

    isAuthorised(code:string):boolean{
        let result:boolean = false;
        let user!:User;
        this.userService.getUser(parseInt(code))
        .subscribe({
            next:(resp)=>{
                console.log(resp);
                user = resp;
            }
        })
        console.log(user);
        if(user.rol == "ADMIN"){
            result = true;
        }
        return result;
    }
}