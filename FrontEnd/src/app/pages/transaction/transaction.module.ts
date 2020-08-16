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
import { TransactionComponent } from './transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { SimplifiedComponent } from './simplified/simplified.component';
import { CompleteComponent } from './complete/complete.component';


@NgModule({
  declarations: [
    TransactionComponent,
    SimplifiedComponent,
    CompleteComponent],
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
    TransactionRoutingModule,
    NbSelectModule,
    NbIconModule,
  ],
})
export class TransactionModule { }
