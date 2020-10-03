import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';
import { ToastrService } from '../../../../services/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cod-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {
  form: FormGroup;
  categoryID: string = '';
  upperCategoryID: string = '';
  categoryType: string = '';
  buttonDescription = '';

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private toastrService: ToastrService,
  ) {
    try {
      if (this.router.getCurrentNavigation().extras.state.categoryID != null) {
        this.categoryID = this.router.getCurrentNavigation().extras.state.categoryID;
      }
    } catch (e) {}
    try {
      if (this.router.getCurrentNavigation().extras.state.upperCategoryID != null) {
        this.upperCategoryID = this.router.getCurrentNavigation().extras.state.upperCategoryID;
      }
    } catch (e) {}
    try {
      if (this.router.getCurrentNavigation().extras.state.categoryType != null) {
        this.categoryType = this.router.getCurrentNavigation().extras.state.categoryType;
      }
    } catch (e) {}
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
      categoryType: new FormControl(this.categoryType, Validators.required),
      upperCategory: new FormControl(this.upperCategoryID),
      active: new FormControl(''),
    });
    if (this.categoryID.trim().length > 0) {
      this.categoryService.get(this.categoryID)
      .subscribe(category => {
        this.form.patchValue({description: category.description});
        this.form.patchValue({categoryType: category.categoryType});
        if (category.upperCategory !== null) {
          this.form.patchValue({upperCategory: category.upperCategory.idCategory});
        }
        this.form.patchValue({active: category.active});
      });
      this.buttonDescription = 'Save Category Changes';
    } else if (this.categoryType.trim().length > 0) {
      this.buttonDescription = 'Create New Category';
    } else {
      this.router.navigateByUrl('/pages/general/category');
    }
  }

  onSubmit(categoryItem) {
    if (this.categoryID.trim().length > 0) {
      categoryItem.idCategory = this.categoryID;
      this.categoryService.edit(this.categoryID, categoryItem)
        .subscribe(
          data => {
            this.toastrService.makeToastSucess('Category changes saved!');
            this.router.navigateByUrl('/pages/general/category');
          },
          error => {
            this.toastrService.makeToastDanger(error);
          },
        );
    } else {
      this.categoryService.save(categoryItem)
        .subscribe(
          data => {
            this.toastrService.makeToastSucess('New category created!');
            this.router.navigateByUrl('/pages/general/category');
          },
          error => {
            this.toastrService.makeToastDanger(error);
          },
        );
    }
  }

}
