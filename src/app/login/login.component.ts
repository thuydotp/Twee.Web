import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

import { AuthService } from "../core/services/auth.service";

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    message: string;

    constructor(public authService: AuthService, public router: Router) {
    }

    ngOnInit(): void {
        this.setMessage();
    }

    setMessage(): void{
        this.message = this.authService.isLoggedIn ? 'You have just logged in' : 'To access to our website, please login in';
    }

    login() {
        this.message = 'Attempting to log in ...';

        this.authService.login().subscribe(()=>{
            this.setMessage();
            if(this.authService.isLoggedIn){
                //Get the redirect URL from auth service
                //If no redirect URL has been set, use the default
                let redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

                // Set our navigation extras object
                // that passes on our global query params and fragment
                let navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                };

                //Redirect the user
                this.router.navigate([redirectUrl], navigationExtras);

            }
        });
    }

    logout(){
        this.authService.logout();
        this.setMessage();
    }

}