import { BankAccount } from './bankaccount';
import { CalendarEvent } from 'angular-calendar';
import { DirectDebit } from '../objects/directdebits';

export class UserProfile {
  username: String;
  password: String;
  bankAccounts: BankAccount[];
  events?: CalendarEvent[];
  directDebits?: DirectDebit[];


constructor() {
  this.bankAccounts = [];
  this.events = [];
  this.directDebits = [];
}

}
