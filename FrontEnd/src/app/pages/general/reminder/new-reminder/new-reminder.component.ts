import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReminderService } from '../../../../services/reminder.service';
import { ToastrService } from '../../../../services/toastr.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'cod-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.scss'],
})
export class NewReminderComponent implements OnInit {
  categories: any;
  form: FormGroup;
  reminderID: string = '';
  buttonDescription = '';

  constructor(
    private router: Router,
    private reminderService: ReminderService,
    private categoryService: CategoryService,
    private datepipe: DatePipe,
    private toastrService: ToastrService,
  ) {
    try {
      if (this.router.getCurrentNavigation().extras.state.reminderID != null) {
        this.reminderID = this.router.getCurrentNavigation().extras.state.reminderID;
      }
    } catch (e) {}
  }

  ngOnInit(): void {
    this.categoryService.getAll()
    .subscribe(categories => {
      this.categories = categories;
    });

    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
      reminderType: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl(''),
      amount: new FormControl('', Validators.required),
      active: new FormControl(''),
    });

    if (this.reminderID.trim().length > 0) {
      this.reminderService.get(this.reminderID)
      .subscribe(reminder => {
        this.form.patchValue({description: reminder.description});
        this.form.patchValue({reminderType: reminder.reminderType});
        this.form.patchValue({category: reminder.category.idCategory});
        this.form.patchValue({startDate: this.datepipe.transform(reminder.startDate, 'yyyy-MM-dd')});
        this.form.patchValue({endDate: this.datepipe.transform(reminder.endDate, 'yyyy-MM-dd')});
        this.form.patchValue({amount: reminder.amount});
        this.form.patchValue({active: reminder.active});
      });
      this.buttonDescription = 'Save Reminder Changes';
    } else {
      this.buttonDescription = 'Create New Reminder';
    }
  }

  onSubmit(reminderItem) {
    if (this.reminderID.trim().length > 0) {
      reminderItem.idReminder = this.reminderID;
      this.reminderService.edit(this.reminderID, reminderItem)
        .subscribe(
          data => {
            this.toastrService.makeToastSucess('Reminder changes saved!');
            this.router.navigateByUrl('/pages/general/reminder');
          },
          error => {
            this.toastrService.makeToastDanger(error);
          },
        );
    } else {
      this.reminderService.save(reminderItem)
        .subscribe(
          data => {
            this.toastrService.makeToastSucess('New reminder created!');
            this.router.navigateByUrl('/pages/general/reminder');
          },
          error => {
            this.toastrService.makeToastDanger(error);
          },
        );
    }
  }

}
