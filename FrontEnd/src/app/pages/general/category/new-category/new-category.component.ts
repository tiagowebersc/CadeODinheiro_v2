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

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
      categoryType: new FormControl('', Validators.required),
      upperCategory: new FormControl(''),
      active: new FormControl(''),
    });
  }

  onSubmit(newCategoryItem) {
    this.categoryService.save(newCategoryItem)
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
