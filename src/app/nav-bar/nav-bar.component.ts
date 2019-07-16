import {Component, Output, EventEmitter} from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component ({
    selector: 'nav-bar',
    templateUrl: 'nav-bar.html',
    styleUrls: ['nav-bar.css']
})

export class NavBarComponent {
  sidebarEmit: boolean;

  constructor(public sharedService: SharedService) {
    this.sidebarEmit = false;
   }
  list = ['sign-out', 'sign-in'];


  logOut(): void {
    this.sharedService.signedIn = false;
  }

  toggleSidenav() {
    this.sidebarEmit = !this.sidebarEmit;
  }
}

