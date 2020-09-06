import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReminderService } from '../../../../services/reminder.service';
import { ToastrService } from '../../../../services/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cod-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.scss'],
})
export class NewReminderComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private reminderService: ReminderService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
      reminderType: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl(''),
      amount: new FormControl('', Validators.required),
      active: new FormControl(''),
    });
  }

  onSubmit(newReminderItem) {

    this.reminderService.save(newReminderItem)
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
