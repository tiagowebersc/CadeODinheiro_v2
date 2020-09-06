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
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyComponent } from './currency/currency.component';
import { CategoryComponent } from './category/category.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './account/new-account/new-account.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import { NewReminderComponent } from './reminder/new-reminder/new-reminder.component';


@NgModule({
  declarations: [
    GeneralComponent,
    CurrencyComponent,
    CategoryComponent,
    ReminderComponent,
    ProfileComponent,
    AccountComponent,
    NewAccountComponent,
    NewCategoryComponent,
    NewReminderComponent,
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
    ReactiveFormsModule,
  ],
})
export class GeneralModule { }
