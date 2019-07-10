import { BankAccount } from './bankaccount';

export class UserProfile {
  username: String;
  password: String;
  bankAccounts: BankAccount[];


constructor() {
  this.bankAccounts = [];
}

}
