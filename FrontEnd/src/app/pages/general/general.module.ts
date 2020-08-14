import { NgModule } from '@angular/core';

import { GeneralComponent } from './general.component';
import { GeneralRoutingModule } from './general-routing.module';
import { CurrencyComponent } from './currency/currency.component';


@NgModule({
  declarations: [
    GeneralComponent,
    CurrencyComponent,
  ],
  imports: [
    GeneralRoutingModule,
  ],
})
export class GeneralModule { }
