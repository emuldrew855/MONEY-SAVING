import { BankAccount } from './../shared/objects/bankaccount';
import { DirectDebit } from './../shared/objects/directdebits';
import { UserProfile } from '../shared/objects/UserProfile';
import { Component} from '@angular/core';
import { SharedService } from '../shared/shared.service';
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
  displayError: boolean = false;

  constructor(private sharedService: SharedService, private router: Router) {
    this.newUser = new UserProfile();
    this.newUser.bankAccounts = [];
    this.newUser.directDebits = [];
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
    for (let i = 0; i < this.directDebits.length; i++) {
      this.directDebits[i].bankAccount = new BankAccount();
    }
    this.newDirectDebit = new DirectDebit();
  }

  onSubmit() {
    this.userCreated = false;
    this.displayError = false;
    if (this.newBanks.length < 1) {
        this.displayError = true;
    }
    if(this.displayError === false) {
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

      for (var newDirectDebit of this.directDebits) {
          console.log(newDirectDebit.bankAccount.name);
          console.log(newDirectDebit);
          this.newUser.directDebits.push(newDirectDebit);
      }

      for (var newBank of this.newBanks) {
        for (let i = 0; i < this.newUser.directDebits.length; i++) {
          if (newBank.name === this.newUser.directDebits[i].bankAccount.name) {
              newBank.directDebits.push(this.newUser.directDebits[i]);
          }
          this.newUser.bankAccounts.push(newBank);
        }
      }
  }
}


}

