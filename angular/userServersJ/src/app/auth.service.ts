import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./servers/interfaces/client.interface";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private router:Router){}


    //loggedIn:boolean = false;

    isAuthenticated():boolean {
        return Boolean(localStorage.getItem("login"));
        // const promise = new Promise<boolean> (
        //     (resolve, reject) => {
        //         setTimeout(() => {
        //             resolve(this.loggedIn);
        //         }, 800);
        //     }
        // );
        //return promise;
    }

    login() {
        localStorage.setItem("login", "true");
        //this.loggedIn = true;
    }

    logout() {
        localStorage.setItem("login", "false");
        //this.loggedIn = false;
    }

    
    checkUser(email:string, passwd:string){
        let user!:User;
        this.http.get<User[]>(`http://localhost:3000/users?email=${email}`)//getUserByEmail en users.service
        .subscribe({
          next:(resp)=>{
            user = resp[0];
            if(user.name == passwd){
                localStorage.setItem("login", "true");
                //this.loggedIn = true;
                this.router.navigate(['/servers']);
            }else{
                localStorage.setItem("login", "false");
                //this.loggedIn = false;
            }
        },
          error:()=>{return false}
        })
      }
}