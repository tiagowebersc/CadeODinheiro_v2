import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';
import { CurrencyService } from '../../../services/currency.service';

@Component({
  selector: 'cod-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  accounts: any;

  constructor(
    private accountService: AccountService,
    private currencyService: CurrencyService,
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

  onCustomAction(event) {
    switch ( event.action) {
      case 'editAction':
        // console.log(event.data.idAccount);
        this.router.navigateByUrl('/pages/general/account/new');
        break;
     case 'otherAction':
        // test
    }
  }

  settings = {
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
      columnTitle: 'Edit',
      position: 'right',
      class: 'action-column',
      custom: [
        {
          name: 'editAction',
          title: '<i class="ion-forward"></i>',
        },
      ],
    },
  };
}
