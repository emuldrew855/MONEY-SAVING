import { UserProfile } from '../shared/objects/UserProfile';
import { Component} from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BankAccount } from '../shared/objects/bankaccount';
import { Router } from '@angular/router'


@Component({
    selector: 'about-view',
    templateUrl: 'sign-up-view.html',
    styleUrls: ['sign-up-view.css']
})

export class SignUpViewComponent {
  newUser: UserProfile;
  newBanks: BankAccount[];
  newBank: BankAccount;
  userCreated: boolean;

  constructor(private sharedService: SharedService, private router: Router) {
    this.newUser = new UserProfile();
    this.newUser.bankAccounts = [];
    this.newBanks = [];
    this.newBank = new BankAccount();
    this.userCreated = false;
  }

  addNewCard() {
    this.newBanks.push(this.newBank);
    console.log(this.newBanks);
  }

  onSubmit() {
    this.userCreated = false;
    for(var newBank of this.newBanks) {
      this.newUser.bankAccounts.push(newBank);
    }
    for(var newUser of this.sharedService.userProfiles) {
      if (newUser.username === this.newUser.username) {
        this.userCreated = true;
      }
    }
    if (this.userCreated === false) {
      this.sharedService.userProfiles.push(this.newUser);
      console.log(this.newUser);
      window.alert('User Created!');
      this.router.navigate(['./home/login']);
    }
  }

}
