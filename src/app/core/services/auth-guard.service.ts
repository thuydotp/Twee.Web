import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    
    constructor(private authService: AuthService, private router: Router) {}
    // canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    //     console.log('AuthGuard#canActivate called');
    //     return true;
    // }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if(this.authService.isLoggedIn) return true;

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        
        return false;
    }
}