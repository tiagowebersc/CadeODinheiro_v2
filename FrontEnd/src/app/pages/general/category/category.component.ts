import { Component, OnInit, Input } from '@angular/core';
import { CategoryService, FSEntry } from '../../../services/category.service';
import { Router } from '@angular/router';
import { NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';
import { Category } from '../../../model/category';
import { ToastrService } from '../../../services/toastr.service';

@Component({
  selector: 'cod-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  customColumn = 'description';
  defaultColumns = [ 'items'  ]; // 'active', 'items'
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  dataSource: NbTreeGridDataSource<FSEntry>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toastrService: ToastrService,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    ) { }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe(categories => {
        this.categories = categories;
        this.dataSource = this.dataSourceBuilder.create(this.categoryService.getCategoryTree(this.categories));
      });
  }

   public openNewPage(categoryType: String, upperCategoryID: String) {
      // this.router.navigateByUrl('/pages/general/category/new');
      if (categoryType != null && categoryType.length > 0) {
        this.router.navigate(['/pages/general/category/new'], { state: { categoryType: categoryType , upperCategoryID: upperCategoryID } });
      } else {
        this.toastrService.makeToastSucess('Problem to load the data!');
      }
   }

   public openEditPage(categoryID: String) {
    // this.router.navigateByUrl('/pages/general/category/new');
    if (categoryID != null && categoryID.length > 0) {
      this.router.navigate(['/pages/general/category/new'], { state: { categoryID: categoryID } });
    } else {
      this.toastrService.makeToastSucess('Problem to load the data!');
    }
 }

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
