import { DirectDebit } from './../shared/objects/directdebits';
import { UserProfile } from '../shared/objects/UserProfile';
import { Component} from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BankAccount } from '../shared/objects/bankaccount';
import { Router } from '@angular/router';



@Component({
    selector: 'about-view',
    templateUrl: 'sign-up-view.html',
    styleUrls: ['sign-up-view.css']
})

export class SignUpViewComponent {
  newUser: UserProfile;
  newBanks: BankAccount[];
  newBank: BankAccount;
  directDebits: DirectDebit[];
  newDirectDebit: DirectDebit;
  userCreated: boolean;

  constructor(private sharedService: SharedService, private router: Router) {
    this.newUser = new UserProfile();
    this.newUser.bankAccounts = [];
    this.newBanks = [];
    this.newBank = new BankAccount();
    this.directDebits = [];
    this.newDirectDebit = new DirectDebit();
    this.userCreated = false;
  }

  addNewCard() {
    this.newBanks.push(this.newBank);
    this.newBank = new BankAccount();
  }

  addNewDirectDebit( ) {
    this.directDebits.push(this.newDirectDebit);
    this.newDirectDebit = new DirectDebit();
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
      window.alert('User Created!');
      this.router.navigate(['./home/login']);
    }
  }

}
