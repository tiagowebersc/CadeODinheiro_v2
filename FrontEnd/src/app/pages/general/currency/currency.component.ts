import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../../services/currency.service';

@Component({
  selector: 'cod-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  currencies: any;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencies = this.currencyService.getList();
  }

  settings = {
    columns: {
      acronym: {
        title: 'Acronym',
      },
      name: {
        title: 'Name',
        valuePrepareFunction: (value) => this.currencyService.getCurrencyDescription(value),
        filterFunction: (cell?: any, search?: string) => {
          if (search.length > 0) {
            return this.currencyService.getCurrencyDescription(cell).toLowerCase().match(search.toLowerCase());
          }
        },
      },
      prefix: {
        title: 'Prefix',
      },
      suffix: {
        title: 'Suffix',
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };
}
