import { NgModule } from '@angular/core';

import { GeneralComponent } from './general.component';
import { GeneralRoutingModule } from './general-routing.module';
import { CurrencyComponent } from './currency/currency.component';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { ReminderComponent } from './reminder/reminder.component';


@NgModule({
  declarations: [
    GeneralComponent,
    CurrencyComponent,
    AccountComponent,
    CategoryComponent,
    ReminderComponent,
  ],
  imports: [
    GeneralRoutingModule,
  ],
})
export class GeneralModule { }
