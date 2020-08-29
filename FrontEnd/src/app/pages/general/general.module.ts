import { NgModule } from '@angular/core';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GeneralComponent } from './general.component';
import { GeneralRoutingModule } from './general-routing.module';
import { CurrencyComponent } from './currency/currency.component';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    GeneralComponent,
    CurrencyComponent,
    AccountComponent,
    CategoryComponent,
    ReminderComponent,
    ProfileComponent,
  ],
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    Ng2SmartTableModule,
    GeneralRoutingModule,
  ],
})
export class GeneralModule { }
