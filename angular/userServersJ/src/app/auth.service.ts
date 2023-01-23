import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UsersService } from './users/services/users.service';
import { of, switchMap, catchError } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { AuthResponse } from './servers/interfaces/token.interface';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private cookieService:CookieService, private userService:UsersService){}


    //loggedIn:boolean = false;

    isAuthenticated():boolean {
        if(!this.cookieService.check("authenticated")){
            this.cookieService.set("authenticated", "false");
        }
        return this.cookieService.get("authenticated")==='true';

        //guardar login en localStorage
        //return JSON.parse(localStorage.getItem("login")||"false");
        //localStorage.getItem("login")==='true'

        //opción original
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
        this.cookieService.delete("authenticated");
        this.cookieService.delete("token");
        this.cookieService.delete("rol");

        //localStorage.setItem("login", "false");
         
        //this.loggedIn = false;
    }

    
    login(email:string, password:string){
        console.log("login");
        const headers: HttpHeaders = new HttpHeaders()
        .set('Content-type','application/json');

        //va a devolver un observable
        return this.http.post<AuthResponse>('http://localhost:8000/auth/login', {email, password}, {headers})
        .pipe(switchMap(token => {
                this.cookieService.set('token', token.access_token);
                this.cookieService.set('authenticated', 'true');
                this.getRol(email);
                return of(true);
            }),catchError(error => {
                this.logout()
                return of(false);
            })
        )

        // V.1
        // let user!:User;
        // //si no encuentra devolverá un objeto vacío
        // this.userService.getUserByEmail(email)
        // .subscribe({
        //   next:(resp)=>{
        //     user = resp[0];
        //     if(resp.length && user.password == password){
        //         //localStorage.setItem("login", "true");
        //         //localStorage.setItem("user", String(user.rol));
        //         //this.loggedIn = true;
        //         this.router.navigate(['/servers']);
        //     }else{
        //         //localStorage.setItem("login", "false");
        //         this.cookieService.delete("token");
        //         confirm('usuario o contraseña incorrectos');
        //         //this.loggedIn = false;
        //     }
        // },
        //   error:()=>{}
        // })

        // V pipe
        // return this.userService.getUserByEmail(email)
        // .pipe( switchMap((user=> {
            // if (user.length && user[0].password===password){
            //     localStorage.setItem('authenticated', 'true');
            //     localStorage.setItem('rol',user[0].rol)
            //     return of(true)
            // }
            // else{
            //     localStorage.setItem('authenticated', 'false');
            //     return of(false)
            // }
            // })),
            // catchError(error=>{return of (false)})
        //)
    }

    getRol(email:string):void{
        this.userService.getUserByEmail(email)
        .subscribe({
            next:(user)=> {
                if (user.length){
                    this.cookieService.set('rol',user[0].rol)
                    return of(true)
                }
                else{
                    this.cookieService.set('authenticated', 'false');
                    return of(false)
                }
            }, 
            error:(err)=>{return of(false)}
        })
    }

    isAuthorised():boolean{
        return this.cookieService.get("rol")==='ADMIN';
    }
}