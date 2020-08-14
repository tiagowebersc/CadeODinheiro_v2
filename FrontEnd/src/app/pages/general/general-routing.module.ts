import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralComponent } from './general.component';
import { CurrencyComponent} from './currency/currency.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
       {
         path: 'currency',
         component: CurrencyComponent,
       },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule { }
