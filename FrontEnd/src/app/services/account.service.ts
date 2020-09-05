import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  constructor(private http: HttpClient) {
   }

   get() {
    return this.http.get<AccountResponse>('http://localhost:8080/accounts')
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
