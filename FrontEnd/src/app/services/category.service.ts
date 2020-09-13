import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoryTypeMap: Map<string, string> = new Map();

  constructor(private http: HttpClient) {
    this.categoryTypeMap.set('EP', 'Expense');
    this.categoryTypeMap.set('IC', 'Income');
    this.categoryTypeMap.set('TR', 'Transfer');
   }

   getCategoryTypeDescription(categoryType: string) {
    return this.categoryTypeMap.get(categoryType);
  }

   get() {
    return this.http.get<CategoryResponse>('http://localhost:8080/categories')
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError),
      );
  }

  save(category: Category) {
    return this.http.post<Category>('http://localhost:8080/categories', category)
    .pipe(
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse) {
    // console.log(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

interface CategoryResponse {
  categories: Category[];
}
