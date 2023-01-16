import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./servers/interfaces/client.interface";
import { UsersService } from './users/services/users.service';
import { of, Observable, switchMap } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private router:Router, private http: HttpClient, private cookieService:CookieService){}


    //loggedIn:boolean = false;

    isAuthenticated():boolean {
        let token:boolean = false;
        if(this.cookieService.get("token")!=undefined){
            token = true;
        }
        return token;
        //return JSON.parse(localStorage.getItem("login")||"false");
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
        //localStorage.setItem("login", "false");
        //localStorage.setItem("user", "");
        this.cookieService.delete("token");
        //this.loggedIn = false;
    }

    
    login(email:string, passwd:string){
        const headers: HttpHeaders = new HttpHeaders()
        .set('Content-type','application/json')

        let user!:User;
        //si no encuentra devolverá un objeto vacío
        this.userService.getUserByEmail(email)
        .subscribe({
          next:(resp)=>{
            user = resp[0];
            if(resp.length && user.password == passwd){
                //localStorage.setItem("login", "true");
                //localStorage.setItem("user", String(user.rol));
                //this.loggedIn = true;
               
                this.http.post<string>('http://localhost:8000/auth/login', user, {headers})
                .subscribe({next:(resp)=>this.cookieService.set('token', resp)});
                this.router.navigate(['/servers']);
            }else{
                //localStorage.setItem("login", "false");
                this.cookieService.delete("token");
                confirm('usuario o contraseña incorrectos');
                //this.loggedIn = false;
            }
        },
          error:()=>{}
        })
    }

    isAuthorised():boolean{
        return localStorage.getItem("user")==='ADMIN';
    }
}