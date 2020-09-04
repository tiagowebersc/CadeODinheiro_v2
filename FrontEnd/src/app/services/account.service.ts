import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

  private handleError(error: HttpErrorResponse) {
    // console.log(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

interface Account {
  idAccount: number;
  // currency: Currency;
  accountType: string;
  name: string;
  description: string;
  balance: number;
  displayOnDashboard: boolean;
  active: boolean;
}

interface AccountResponse {
  accounts: Account[];
}
