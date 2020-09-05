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


@NgModule({
  declarations: [
    GeneralComponent,
    CurrencyComponent,
    CategoryComponent,
    ReminderComponent,
    ProfileComponent,
    AccountComponent,
    NewAccountComponent,
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
