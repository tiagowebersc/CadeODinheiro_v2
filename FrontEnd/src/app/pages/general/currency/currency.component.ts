import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cod-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

  data = [
    {
      acronym: 'USD',
      name: 'US Dollar',
      prefix: '$',
      suffix: '',
    },
    {
      acronym: 'EUR',
      name: 'Euro',
      prefix: '',
      suffix: '€',
    },
    {
      acronym: 'BRL',
      name: 'Real',
      prefix: 'R$',
      suffix: '',
    },
  ];
}
