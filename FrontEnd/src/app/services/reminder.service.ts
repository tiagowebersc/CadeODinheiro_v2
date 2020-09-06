import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Reminder } from '../model/reminder';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {

  constructor(private http: HttpClient) {
   }

   get() {
    return this.http.get<ReminderResponse>('http://localhost:8080/reminders')
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError),
      );
  }

  save(reminder: Reminder) {
    return this.http.post<Reminder>('http://localhost:8080/reminders', reminder)
    .pipe(
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse) {
    // console.log(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

interface ReminderResponse {
  reminders: Reminder[];
}
