import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Reminder } from '../model/reminder';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {
  private reminderTypeMap: Map<string, string> = new Map();

  constructor(private http: HttpClient) {
    this.reminderTypeMap.set('SG', 'Single');
    this.reminderTypeMap.set('MT', 'Monthly');
    this.reminderTypeMap.set('QT', 'Quarterly');
    this.reminderTypeMap.set('SM', 'Semesterly');
    this.reminderTypeMap.set('YR', 'Yearly');
  }

  getReminderTypeDescription(reminderType: string) {
    return this.reminderTypeMap.get(reminderType);
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
