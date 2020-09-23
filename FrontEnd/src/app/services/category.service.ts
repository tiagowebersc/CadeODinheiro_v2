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
  private dataTreeNode: TreeNode<FSEntry>[];

  constructor(private http: HttpClient) {
    this.categoryTypeMap.set('EP', 'Expense');
    this.categoryTypeMap.set('IC', 'Income');
    this.categoryTypeMap.set('TR', 'Transfer');
   }

   getCategoryTypeDescription(categoryType: string) {
    return this.categoryTypeMap.get(categoryType);
  }

  getCategoryTree(categories: CategoryResponse) {
    this.dataTreeNode = [];
    this.categoryTypeMap.forEach((value: string, key: string) => {
      const item = new FSEntry(0, key, value, true);
      item.items = 1;
      const itemAdd = new FSEntry(1, key, 'Add new ' + value, true);
      itemAdd.action = 'add';

      this.dataTreeNode.push({data: item, children: [{data: itemAdd}]});
    });
    return this.dataTreeNode;
  }

   getAll() {
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

export interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

export class FSEntry {
  constructor(level: number, categoryType: string, description: string, active: boolean) {
    this.level = level;
    this.categoryType = categoryType;
    this.description = description;
    this.active = active;
  }

  level: number;
  categoryType: string;
  description: string;
  active: boolean;
  items?: number;
  action?: string;
}
