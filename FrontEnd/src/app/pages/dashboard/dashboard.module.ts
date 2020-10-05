import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { PagesModule } from '../pages.module';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    Ng2SmartTableModule,
    PagesModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
