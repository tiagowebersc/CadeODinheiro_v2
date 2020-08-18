import { NgModule } from '@angular/core';


import { StatementRoutingModule } from './statement-routing.module';
import { StatementComponent } from './statement.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';


@NgModule({
  declarations: [
    StatementComponent,
    AccountStatementComponent,
  ],
  imports: [
    StatementRoutingModule,
  ],
})
export class StatementModule { }
