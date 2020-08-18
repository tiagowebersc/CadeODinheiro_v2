import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryComponent } from './summary.component';
import { YearlyComponent } from './yearly/yearly.component';
import { MonthlyComponent } from './monthly/monthly.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryComponent,
    children: [
       {
         path: 'monthly',
         component: MonthlyComponent,
       },
       {
        path: 'yearly',
        component: YearlyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryRoutingModule { }
