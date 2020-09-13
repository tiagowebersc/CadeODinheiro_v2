import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cod-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  accounts: any;

  constructor(
    private accountService: AccountService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.accountService.get()
      .subscribe(accounts => {
        this.accounts = accounts;
      });
  }

  public openNewPage() {
    this.router.navigateByUrl('/pages/general/account/new');
  }

  settings = {
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
      },
      displayOnDashboard: {
        title: 'Display on dashboard',
        valuePrepareFunction: (value) => value ? 'Yes' : 'No',
        filter: {
          type: 'checkbox',
          config: {
            true: 'true',
            false: 'false',
            resetText: 'clear',
          },
        },
      },
      active: {
        title: 'Active?',
        valuePrepareFunction: (value) => value ? 'Yes' : 'No',
        filter: {
          type: 'checkbox',
          config: {
            true: 'true',
            false: 'false',
            resetText: 'clear',
          },
        },
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };
}
