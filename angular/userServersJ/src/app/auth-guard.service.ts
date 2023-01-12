import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()//{providedIn:'root'} se podrá usar en cualquier sitio, no hace falta ponerlo en routing(pero si en el app.module)
export class AuthGuard implements CanActivate, CanActivateChild{

    constructor(private authService:AuthService, private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        //return this.authService.isAuthenticated();
        if (this.authService.isAuthenticated()){
            return true;
          } else {
            this.router.navigate(['/']);
          }
          return false;

        // return this.authService.isAuthenticated()
        // .then(
        //     (authenticated: boolean) => {
        //         let result = false;
        //         if (authenticated) {
        //             result =  true;
        //         } else {
        //             this.router.navigate(['/']);
        //         }
        //         return result;
        //     }
        // );
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthorised(localStorage.getItem("user")||"")){
            return true;
        } else {
            this.router.navigate(['/']);
        }
        return false;
    }
}
    