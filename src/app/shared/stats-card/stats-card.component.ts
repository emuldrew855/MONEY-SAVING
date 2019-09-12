import { BankAccount } from './../objects/bankaccount';
import { SharedService } from './../shared.service';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnChanges {

  totalBalance: number = 0;
  eventsAmount: number = 0;
  constructor(public sharedService: SharedService) {
    for (let i = 0; i < this.sharedService.currentUser.bankAccounts.length; i++) {
      this.totalBalance = this.totalBalance + this.sharedService.currentUser.bankAccounts[i].amount;
      console.log('Total Balance: ' + this.totalBalance);

      for (let i = 0; i < this.sharedService.currentUser.bankAccounts.length; i++) {
        this.totalBalance = this.totalBalance + this.sharedService.currentUser.bankAccounts[i].amount;
        console.log('Total Balance: ' + this.totalBalance);
    }

    for (let i = 0; i < this.sharedService.currentUser.events.length; i++) {
        this.eventsAmount = this.eventsAmount + this.sharedService.currentUser.events[i].amount;
        console.log('Events Total Amount: ' + this.totalBalance);
    }
    }
  }

  ngOnChanges() {
    for (let i = 0; i < this.sharedService.currentUser.bankAccounts.length; i++) {
        this.totalBalance = this.totalBalance + this.sharedService.currentUser.bankAccounts[i].amount;
        console.log('Total Balance: ' + this.totalBalance);
    }

    for (let i = 0; i < this.sharedService.currentUser.events.length; i++) {
        this.eventsAmount = this.eventsAmount + this.sharedService.currentUser.events[i].amount;
        console.log('Events Total Amount: ' + this.totalBalance);
    }
  }

}
