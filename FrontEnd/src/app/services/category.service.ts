import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private http: HttpClient) {
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

  private handleError(error: HttpErrorResponse) {
    // console.log(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

interface Category {
  idCategory: number;
  categoryType: string;
  description: string;
  category: Category;
  active: boolean;
}

interface CategoryResponse {
  categories: Category[];
}
