import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../../../services/reminder.service';
import { Router } from '@angular/router';

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
      },
      endDate: {
        title: 'End date',
      },
      reminderType: {
        title: 'Reminder type',
      },
      active: {
        title: 'Active?',
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
