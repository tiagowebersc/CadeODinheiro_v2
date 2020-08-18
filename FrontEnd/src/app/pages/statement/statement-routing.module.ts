import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatementComponent } from './statement.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';


const routes: Routes = [
  {
    path: '',
    component: StatementComponent,
    children: [
       {
         path: 'account-statement',
         component: AccountStatementComponent,
       },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatementRoutingModule { }
