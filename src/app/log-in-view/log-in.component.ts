import { Component, DoCheck } from '@angular/core'
import { SharedService } from '../shared/shared.service';

@Component ({
    selector: 'log-in',
    templateUrl: './log-in.html',
    styleUrls: ['./log-in.less']
})

export class LoginComponent implements DoCheck {
    userName: string;
    password: string;
    pageTitle = 'Log In';
    validity: string;
    displayError: boolean;
    usernameError: boolean;
    passwordError: boolean;
    access: boolean;

    constructor(private sharedService: SharedService){ }

    logIn() : void {
        if(this.userName != "username" || this.password != "password") {
            this.displayError = true;
        }else{
            this.displayError = false;
            this.access = true;
            this.sharedService.signedIn = true;
            this.sharedService.username = this.userName;
        }

        if(this.userName != "username") {
            this.usernameError = true;
        }else {
            this.usernameError = false;
        }

        if(this.password != "password") {
            this.passwordError = true;
        }else {
            this.passwordError = false;
        }
    }

    ngDoCheck() {
            if (this.userName && this.password) {
                this.validity = '';
                return this.validity;
            }else {
                this.validity = 'valid';
                return this.validity;
            }
    }
}
