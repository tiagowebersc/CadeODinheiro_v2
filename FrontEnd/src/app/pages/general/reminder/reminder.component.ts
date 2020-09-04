import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../../../services/reminder.service';

@Component({
  selector: 'cod-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
})
export class ReminderComponent implements OnInit {
  reminders: any;

  constructor(private reminderService: ReminderService) { }

  ngOnInit() {
    this.reminderService.get()
      .subscribe(reminders => {
        this.reminders = reminders;
      });
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
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };
}
