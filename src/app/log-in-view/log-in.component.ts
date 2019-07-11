import { UserProfile } from './../shared/userprofile';
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

    logIn(): void {
      for ( let i = 0; i < this.sharedService.userProfiles.length; i++) {
        for ( var userProfile of this.sharedService.userProfiles) {
            if ( userProfile.username !== this.sharedService.userProfiles[i].username ||
              this.password !== this.sharedService.userProfiles[i].password ) {
                this.displayError = true;
            }else {
                this.displayError = false;
                this.access = true;
                this.sharedService.signedIn = true;
                this.sharedService.username = this.userName;
                this.sharedService.currentUser = userProfile;
            }
        }
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
