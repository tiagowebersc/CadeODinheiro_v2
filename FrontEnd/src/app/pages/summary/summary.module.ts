import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary.component';
import { YearlyComponent } from './yearly/yearly.component';
import { MonthlyComponent } from './monthly/monthly.component';


@NgModule({
  declarations: [
    SummaryComponent,
    YearlyComponent,
    MonthlyComponent,
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
  ],
})
export class SummaryModule { }
