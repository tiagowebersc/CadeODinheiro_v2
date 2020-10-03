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

   getAll() {
    return this.http.get<Reminder[]>('http://localhost:8080/reminders')
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError),
      );
  }

  get(reminderID: string) {
    return this.http.get<Reminder>('http://localhost:8080/reminders/' + reminderID)
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

  edit(reminderID: string, reminder: Reminder) {
    return this.http.put<Reminder>('http://localhost:8080/reminders/' + reminderID, reminder)
    .pipe(
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse) {
    // console.log(error.message);
    return throwError('A data error occurred, please try again.');
  }
}
