import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  currenciesReponse: CurrencyResponse = null;

  constructor(private http: HttpClient) {
   }

   loadCurrencyList() {
     this.get().
     subscribe(currencies => {
      this.currenciesReponse = currencies;
    });
   }

   getFormattedValue(currency: string, value: number) {
     // let toReturn = '';
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


  getList() {
    return this.currenciesReponse;
  }

  private handleError(error: HttpErrorResponse) {
    // console.log(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

class CurrencyResponse {
  currencies: Currency[];
}
