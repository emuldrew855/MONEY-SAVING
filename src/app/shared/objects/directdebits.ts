import { BankAccount } from '../objects/bankaccount';

export class DirectDebit {
  name: string;
  type: string;
  amount: number;
  date: Date;
  bankAccount: BankAccount;

  constructor() {
    this.bankAccount = new BankAccount();
  }
}
