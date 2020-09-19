import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountTypeMap: Map<string, string> = new Map();

  constructor(private http: HttpClient) {
    this.accountTypeMap.set('WT', 'Wallet');
    this.accountTypeMap.set('BA', 'Bank account');
    this.accountTypeMap.set('SV', 'Saving account');
    this.accountTypeMap.set('CC', 'Credit card');
    this.accountTypeMap.set('MV', 'Meal voucher');
   }

   getAccountTypeDescription(accountType: string) {
    return this.accountTypeMap.get(accountType);
  }

   getAll() {
    return this.http.get<AccountResponse>('http://localhost:8080/accounts')
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError),
      );
  }

  get(accountID: string) {
    return this.http.get<Account>('http://localhost:8080/accounts' + accountID)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError),
      );
  }


  save(account: Account) {
    return this.http.post<Account>('http://localhost:8080/accounts', account)
    .pipe(
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse) {
    // console.log(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

interface AccountResponse {
  accounts: Account[];
}
