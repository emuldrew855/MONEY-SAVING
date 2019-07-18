import { DirectDebit } from '../objects/directdebits';

export class BankAccount {
  name: string;
  type: string;
  amount: number;
  directDebits?: DirectDebit[];


constructor() {
  this.directDebits = [];
}

}
