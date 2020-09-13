import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../../../services/reminder.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'cod-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
})
export class ReminderComponent implements OnInit {
  reminders: any;

  constructor(
    private reminderService: ReminderService,
    private router: Router,
    private datepipe: DatePipe,
    ) { }

  ngOnInit() {
    this.reminderService.get()
      .subscribe(reminders => {
        this.reminders = reminders;
      });
  }

  public openNewPage() {
    this.router.navigateByUrl('/pages/general/reminder/new');
  }

  settings = {
    columns: {
      description: {
        title: 'Description',
      },
      amount: {
        title: 'Amount',
      },
      startDate: {
        title: 'Start date',
        type: 'date',
        valuePrepareFunction: (date) => {
          if (date) {
            return this.datepipe.transform(date, 'dd/MM/yyyy');
          } else {
            return null;
          }
        },
        filter: false,
      },
      endDate: {
        title: 'End date',
        valuePrepareFunction: (date) => {
          if (date) {
            return this.datepipe.transform(date, 'dd/MM/yyyy');
          } else {
            return null;
          }
        },
        filter: false,
      },
      reminderType: {
        title: 'Reminder type',
        valuePrepareFunction: (value) => this.reminderService.getReminderTypeDescription(value),
        filterFunction: (cell?: any, search?: string) => {
          if (search.length > 0) {
            return this.reminderService.getReminderTypeDescription(cell).toLowerCase().match(search.toLowerCase());
          }
        },
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
