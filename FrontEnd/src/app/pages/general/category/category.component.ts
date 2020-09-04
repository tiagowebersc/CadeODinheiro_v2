import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'cod-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.get()
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  settings = {
    columns: {
      categoryType: {
        title: 'Category Type',
      },
      description: {
        title: 'Description',
      },
      active: {
        title: 'Active?',
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };
}
