import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { SimplifiedComponent } from './simplified/simplified.component';
import { DetailedComponent } from './detailed/detailed.component';
import { CreditCardPaymentComponent } from './credit-card-payment/credit-card-payment.component';
import { TransferComponent } from './transfer/transfer.component';


const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
    children: [
       {
         path: 'simplified',
         component: SimplifiedComponent,
       },
       {
        path: 'detailed',
        component: DetailedComponent,
      },
      {
        path: 'credit-card-payment',
        component: CreditCardPaymentComponent,
      },
      {
        path: 'transfer',
        component: TransferComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule { }
