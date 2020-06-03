import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'cod-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <cod-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </cod-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
