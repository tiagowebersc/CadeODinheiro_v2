import { Currency } from './currency';

export class Account {
    idAccount: number;
    currency: Currency;
    accountType: string;
    name: string;
    description: string;
    balance: number;
    displayOnDashboard: boolean;
    active: boolean;
  }
