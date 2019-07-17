import {Component, Output, EventEmitter} from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component ({
    selector: 'nav-bar',
    templateUrl: 'nav-bar.html',
    styleUrls: ['../themes.scss']
})

export class NavBarComponent {
  sidebarEmit: boolean;
  otherTheme: boolean = false;

  constructor(public sharedService: SharedService) {
    this.sidebarEmit = false;
   }
  list = ['sign-out', 'sign-in'];


  logOut(): void {
    this.sharedService.signedIn = false;
  }

  changeTheme(): void {
   this.otherTheme = !this.otherTheme;
  }

  toggleSidenav() {
    this.sidebarEmit = !this.sidebarEmit;
  }
}

