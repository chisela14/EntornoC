import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UsersService } from './users/services/users.service';
import { of, switchMap, catchError } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { AuthResponse } from './servers/interfaces/token.interface';
import Swal from 'sweetalert2';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private cookieService:CookieService, private userService:UsersService){}


    //loggedIn:boolean = false;

    isAuthenticated() {
        //get a jwt, si responde true, catherror false
        let url:string = "http://localhost:8000/jwt";
        const httpOptions = {
            headers: new HttpHeaders().set( 'Authorization', `Bearer ${this.cookieService.get('token')}`)
        };
      
        return this.http.get(url,httpOptions)
        .pipe(switchMap(resp =>{return of(true)}),
            catchError(error=>{return of(false)})
        );

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
        const headers: HttpHeaders = new HttpHeaders()
        .set('Content-type','application/json');

        //va a devolver un observable
        return this.http.post<AuthResponse>('http://localhost:8000/auth/login', {email, password}, {headers})
        .pipe(switchMap(token => {
                this.cookieService.set('token', token.access_token);
                this.getRol(email);
                return of(true);
            }),catchError(error => {
                Swal.fire("Usuario o contraseña incorrectos")
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