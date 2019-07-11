import { BankAccount } from './bankaccount';
import { CalendarEvent } from 'angular-calendar';

export class UserProfile {
  username: String;
  password: String;
  bankAccounts: BankAccount[];
  events?: CalendarEvent[];


constructor() {
  this.bankAccounts = [];
  this.events = [];
}

}
