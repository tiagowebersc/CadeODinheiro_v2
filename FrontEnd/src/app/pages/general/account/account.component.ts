import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'cod-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  accounts: any;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.get()
      .subscribe(accounts => {
        this.accounts = accounts;
      });
  }

  settings = {
    columns: {
      accountType: {
        title: 'Account type',
      },
      name: {
        title: 'Name',
      },
      balance: {
        title: 'Balance',
      },
      displayOnDashboard: {
        title: 'Display on dashboard',
      },
      active: {
        title: 'Active?',
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };
}
