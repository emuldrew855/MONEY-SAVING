import { UserProfile } from './../shared/objects/userprofile';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { CalendarEvent } from 'angular-calendar';


@Component({
    selector: 'profile-view',
    templateUrl: 'profile-view.html',
    styleUrls: ['profile-view.css']
})

export class ProfileViewComponent implements OnInit {
  currentUser: UserProfile;
  dataSource: CalendarEvent[];
  displayedColumns: string[] = ['title', 'amount', 'type', 'date'];

  constructor(private sharedService: SharedService) {
    this.dataSource = [];
    this.currentUser = this.sharedService.currentUser;
  }

  ngOnInit(): void {
    for(let i = 0; i < this.sharedService.currentUser.events.length; i++) {
      this.dataSource.push(this.sharedService.currentUser.events[i]);
    }
    console.log('Data Source' + this.dataSource);
  }

}
