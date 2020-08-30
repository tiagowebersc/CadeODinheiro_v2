import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  constructor(private http: HttpClient) {
   }

   get() {
    return this.http.get<CurrencyResponse>('http://localhost:8080/currencies')
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

interface Currency {
  acronym: string;
  name: string;
  prefix: string;
  suffix: string;
}

interface CurrencyResponse {
  currencies: Currency[];
}
