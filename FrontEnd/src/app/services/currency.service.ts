import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  currenciesReponse: Currency[] = null;

  constructor(private http: HttpClient) {
   }

   loadCurrencyList() {
     this.get().
     subscribe(currencies => {
      this.currenciesReponse = currencies;
    });
   }

   getCurrency(currencyAcronym: string) {
     if (this.currenciesReponse != null && currencyAcronym != null && currencyAcronym.length > 0) {
        this.currenciesReponse.forEach(function(value) {
          if (value.acronym.match(currencyAcronym)) {
            return value;
          }
        });
     } else {
       return null;
     }
   }

   getFormattedValue(currencyAcronym: string, value: number) {
    let toReturn  = (Math.round(value * 100) / 100).toFixed(2);
    const currency = <Currency>this.getCurrency(currencyAcronym);
    if (currency != null) {
      if (currency.prefix && currency.prefix.length > 0) {
        toReturn = currency.prefix + ' ' + toReturn;
      }
      if (currency.suffix && currency.suffix.length > 0) {
        toReturn = toReturn + ' ' + currency.suffix;
      }
    }
    return toReturn;
   }

   getCurrencyDescription(currencyAcronym: string) {
     if (currencyAcronym.match('EURO')) return 'Euro';
     if (currencyAcronym.match('US_DOLLAR')) return 'US Dollar';
     if (currencyAcronym.match('REAL')) return 'Real';
     if (currencyAcronym.match('UK_POUND')) return 'UK Pound';
     return currencyAcronym;
   }

   get() {
    return this.http.get<Currency[]>('http://localhost:8080/currencies')
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
