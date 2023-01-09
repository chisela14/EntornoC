import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService, private router:Router){}

    // Observable<boolean> | Promise<boolean> | boolean
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | undefined> {
        return this.authService.isAuthenticated()
        .then(
            (authenticated: boolean) => {
                if (authenticated) {
                    return true;
                } else {
                   return this.router.navigate(['/']);
                }
            }
        );
    }
}