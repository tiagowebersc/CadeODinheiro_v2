import { Component, OnInit, Input } from '@angular/core';
import { CategoryService, FSEntry } from '../../../services/category.service';
import { Router } from '@angular/router';
import { NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';

@Component({
  selector: 'cod-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: any;
  customColumn = 'description';
  defaultColumns = [  ]; // 'active', 'items'
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  dataSource: NbTreeGridDataSource<FSEntry>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    ) { }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe(categories => {
        this.categories = categories;
        this.dataSource = this.dataSourceBuilder.create(this.categoryService.getCategoryTree(this.categories));
      });
  }

   public openNewPage() {
     this.router.navigateByUrl('/pages/general/category/new');
   }

  // onCustomAction(event) {
  //   switch ( event.action) {
  //     case 'editAction':
  //       this.router.navigateByUrl('/pages/general/category/new');
  //       break;
  //    case 'otherAction':
  //       // test
  //   }
  // }

  // settings = {
  //   rowClassFunction: (row) => 'ng2-custom-actions-inline',
  //   columns: {
  //     categoryType: {
  //       title: 'Category Type',
  //       valuePrepareFunction: (value) => this.categoryService.getCategoryTypeDescription(value),
  //       filterFunction: (cell?: any, search?: string) => {
  //         if (search.length > 0) {
  //           return this.categoryService.getCategoryTypeDescription(cell).toLowerCase().match(search.toLowerCase());
  //         }
  //       },
  //     },
  //     description: {
  //       title: 'Description',
  //     },
  //     active: {
  //       title: 'Active?',
  //       valuePrepareFunction: (value) => value ? 'Yes' : 'No',
  //       filter: {
  //         type: 'checkbox',
  //         config: {
  //           true: 'true',
  //           false: 'false',
  //           resetText: 'clear',
  //         },
  //       },
  //     },
  //   },
  //   actions: {
  //     add: false,
  //     edit: false,
  //     delete: false,
  //     columnTitle: 'Edit',
  //     position: 'right',
  //     class: 'action-column',
  //     custom: [
  //       {
  //         name: 'editAction',
  //         title: '<i class="ion-forward"></i>',
  //       },
  //     ],
  //   },
  // };

  // -------------- s
  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  // private data: TreeNode<FSEntry>[] = [
  //   {
  //     data: { description: 'Income', level: 1, categoryType: 'income', items: 5, active: 'true' },
  //     children: [
  //       { data: { description: 'project-1.doc', level: 2, categoryType: 'income', active: 'false' } },
  //       { data: { description: 'project-2.doc', level: 2, categoryType: 'income', active: 'true' } },
  //       { data: { description: 'project-3', level: 2, categoryType: 'income', active: 'true' } },
  //       { data: { description: 'project-4.docx', level: 2, categoryType: 'income', active: 'true' } },
  //     ],
  //   },
  //   {
  //     data: { description: 'Expense', level: 1, categoryType: 'expense', active: 'true', items: 2 },
  //     children: [
  //       { data: { description: 'Car', level: 2, categoryType: 'expense', active: 'true', items: 2 },
  //         children: [{data: { description: 'Gas', level: 3, categoryType: 'expense', active: 'true' }},
  //           {data: { description: 'Loan', level: 3, categoryType: 'expense', active: 'true' }},
  //         ] },
  //       { data: { description: 'House', level: 2, categoryType: 'expense', active: 'true' } },
  //     ],
  //   },
  //   {
  //     data: { description: 'Transfer', level: 1, categoryType: 'transfer', active: 'true', items: 2 },
  //     children: [
  //       { data: { description: 'Transfer', level: 2, categoryType: 'transfer', active: 'true' }},
  //     ],
  //   },
  // ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
  // -------------- e
}

@Component({
  selector: 'cod-treeview-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="hasItems(); else nodeIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #nodeIcon>
      <nb-icon icon="minus-outline" *ngIf="!isAddAction();"></nb-icon>
    </ng-template>
    `,
})
export class CategoryTreeViewComponent {
  @Input() items: number;
  @Input() action: string;
  @Input() expanded: boolean;

  hasItems(): boolean {
    if (this.items === null) {
      return false;
    } else {
      return this.items > 0;
    }
  }
  isAddAction(): boolean {
    return this.action === 'add';
  }
}
