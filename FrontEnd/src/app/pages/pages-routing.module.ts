import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'general',
      loadChildren: () => import('./general/general.module')
        .then(m => m.GeneralModule),
    },
    {
      path: 'transaction',
      loadChildren: () => import('./transaction/transaction.module')
        .then(m => m.TransactionModule),
    },
    {
      path: 'statement',
      loadChildren: () => import('./statement/statement.module')
        .then(m => m.StatementModule),
    },
    {
      path: 'summary',
      loadChildren: () => import('./summary/summary.module')
        .then(m => m.SummaryModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
