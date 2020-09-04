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
    this.currencyService.get()
      .subscribe(currencies => {
        this.currencies = currencies;
      });
  }

  settings = {
    columns: {
      acronym: {
        title: 'Acronym',
      },
      name: {
        title: 'Name',
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
