import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralComponent } from './general.component';
import { CurrencyComponent } from './currency/currency.component';
import { CategoryComponent } from './category/category.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './account/new-account/new-account.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent,
      },
      {
        path: 'account/new',
        component: NewAccountComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'currency',
        component: CurrencyComponent,
      },
      {
        path: 'reminder',
        component: ReminderComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule { }
