import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { CurrencyService } from '../../services/currency.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'cod-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  accounts: any;
  reminders: any;

  constructor (
    private accountService: AccountService,
    private currencyService: CurrencyService,
    private datepipe: DatePipe,
  ) { }

  ngOnInit() {
    this.accountService.getDashboard()
      .subscribe(accounts => {
        this.accounts = accounts;
      });
  }

  settingsAccount = {
    rowClassFunction: (row) => 'ng2-custom-actions-inline',
    columns: {
      accountType: {
        title: 'Account type',
        valuePrepareFunction: (value) => this.accountService.getAccountTypeDescription(value),
        filterFunction: (cell?: any, search?: string) => {
          if (search.length > 0) {
            return this.accountService.getAccountTypeDescription(cell).toLowerCase().match(search.toLowerCase());
          }
        },
      },
      name: {
        title: 'Name',
      },
      balance: {
        title: 'Balance',
        valuePrepareFunction: (value) => this.currencyService.getFormattedValue('', value),
        filter: false,
      },
      currency: {
        title: 'Currency',
        valuePrepareFunction: (value) => this.currencyService.getCurrencyDescription(value.name),
        filter: false,
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };
  settingsReminder = {
    rowClassFunction: (row) => 'ng2-custom-actions-inline',
    columns: {
      description: {
        title: 'Description',
      },
      balance: {
        title: 'Amount',
        valuePrepareFunction: (value) => this.currencyService.getFormattedValue('', value),
        filter: false,
      },
      currency: {
        title: 'Currency',
        valuePrepareFunction: (value) => this.currencyService.getCurrencyDescription(value.name),
        filter: false,
      },
      dueDate: {
        title: 'Due date',
        type: 'date',
        valuePrepareFunction: (date) => {
          if (date) {
            return this.datepipe.transform(date, 'dd/MM/yyyy');
          } else {
            return null;
          }
        },
        filter: false,
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };
}
