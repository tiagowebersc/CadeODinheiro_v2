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

  getCategoryTree(categories: Category[]) {
    this.dataTreeNode = [];
    this.categoryTypeMap.forEach((value: string, key: string) => {
      const item = new FSEntry('', 0, key, value, true);
      item.items = 1;
      const itemAdd = new FSEntry('', 1, key, 'Add new ' + value, true);
      itemAdd.action = 'add';

      this.dataTreeNode.push({data: item, children: [{data: itemAdd}]});
    });

    while (categories.length > 0) {
      let i = 0;
      while (i < categories.length) {
        const cat = categories[i];
        for (let k = 0; k < this.dataTreeNode.length; k++) {
          if (this.dataTreeNode[k].data.categoryType === cat.categoryType) {
            if (cat.upperCategory == null) {
              const itemCat = new FSEntry(cat.idCategory, 1, cat.categoryType, cat.description, cat.active);
              this.dataTreeNode[k].children.push({data: itemCat});
              categories.splice(i, 1);
              break;
            } else {
              if (this.setLeaf(cat, 0, this.dataTreeNode[k])) {
                categories.splice(i, 1);
              } else {
                i = i + 1;
              }
            }
          }
        }
      }
    }
    return this.dataTreeNode;
  }

  setLeaf(cat: Category, level: number, itemTree: TreeNode<FSEntry>) {
    if (itemTree.data.id === cat.upperCategory.idCategory) {
      const itemCat = new FSEntry(cat.idCategory, level, cat.categoryType, cat.description, cat.active);
      if (itemTree.children === undefined) {
        itemTree.children = [{data: itemCat}];
      } else {
        itemTree.children.push({data: itemCat});
      }
      return true;
    }
    if (itemTree.children != null) {
      for (let i = 0; i < itemTree.children.length; i ++) {
        level ++;
        if (this.setLeaf(cat, level, itemTree.children[i])) {
          return true;
        }
      }
    }
    return false;
  }

  getAll() {
  return this.http.get<Category[]>('http://localhost:8080/categories')
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
  constructor(id: string, level: number, categoryType: string, description: string, active: boolean) {
    this.id = id;
    this.level = level;
    this.categoryType = categoryType;
    this.description = description;
    this.active = active;
  }

  id: string;
  level: number;
  categoryType: string;
  description: string;
  active: boolean;
  items?: number;
  action?: string;
}
