import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./servers/interfaces/client.interface";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient){}

    loggedIn:boolean = false;

    isAuthenticated():Promise<boolean> {
        const promise = new Promise<boolean> (
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

    checkUser(email:string, passwd:string):boolean{
        let user!:User;
        this.http.get<User>(`http://localhost:3000/users/${email}`)
        .subscribe({
          next:(resp)=>{user = resp},
          error:()=>{return false}
        })
    
        if(user.name == passwd){
            this.loggedIn = true;
            return true;
        }else{
            return false;
        }
      }
}