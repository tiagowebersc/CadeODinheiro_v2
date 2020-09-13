import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cod-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: any;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.categoryService.get()
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  public openNewPage() {
    this.router.navigateByUrl('/pages/general/category/new');
  }

  settings = {
    columns: {
      categoryType: {
        title: 'Category Type',
        valuePrepareFunction: (value) => this.categoryService.getCategoryTypeDescription(value),
        filterFunction: (cell?: any, search?: string) => {
          if (search.length > 0) {
            return this.categoryService.getCategoryTypeDescription(cell).toLowerCase().match(search.toLowerCase());
          }
        },
      },
      description: {
        title: 'Description',
      },
      active: {
        title: 'Active?',
        valuePrepareFunction: (value) => value ? 'Yes' : 'No',
        filter: {
          type: 'checkbox',
          config: {
            true: 'true',
            false: 'false',
            resetText: 'clear',
          },
        },
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };
}
