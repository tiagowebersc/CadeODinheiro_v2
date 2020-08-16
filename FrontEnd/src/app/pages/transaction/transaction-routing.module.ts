import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { SimplifiedComponent } from './simplified/simplified.component';
import { CompleteComponent } from './complete/complete.component';


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
        path: 'complete',
        component: CompleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule { }
