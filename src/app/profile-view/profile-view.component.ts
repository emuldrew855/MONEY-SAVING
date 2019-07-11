import { UserProfile } from './../shared/userprofile';
import { Component} from '@angular/core';
import { SharedService } from '../shared/shared.service';


@Component({
    selector: 'profile-view',
    templateUrl: 'profile-view.html',
    styleUrls: ['profile-view.css']
})

export class ProfileViewComponent {
  currentUser: UserProfile;
  constructor(private sharedService: SharedService) {
    this.currentUser = sharedService.currentUser;
  }
}
