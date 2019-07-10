import { UserProfile } from '../shared/UserProfile';
import { Component} from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { BankAccount } from '../shared/bankaccount';


@Component({
    selector: 'about-view',
    templateUrl: 'sign-up-view.html',
    styleUrls: ['sign-up-view.css']
})

export class SignUpViewComponent {
  newUser: UserProfile;
  newBanks: BankAccount[];
  newBank: BankAccount;

  constructor(private sharedService: SharedService) {
    this.newUser = new UserProfile();
    this.newUser.bankAccounts = [];
    this.newBanks = [];
    this.newBank = new BankAccount();
  }

  addNewCard() {
    this.newBanks.push(this.newBank);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    for(var newBank of this.newBanks) {
      this.newUser.bankAccounts.push(newBank);
    }
    console.warn(this.newUser);
  }

}
