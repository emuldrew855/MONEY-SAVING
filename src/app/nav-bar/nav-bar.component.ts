import {Component} from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component ({
    selector: 'nav-bar',
    templateUrl: 'nav-bar.html',
    styleUrls: ['nav-bar.css']
})

export class NavBarComponent {
  constructor(public sharedService: SharedService) { }
  list = ['sign-out', 'sign-in'];


  logOut(): void {
    this.sharedService.signedIn = false;
  }
}

