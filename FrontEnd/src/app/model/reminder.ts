import { Category } from './category';

export class Reminder {
    idReminder: string;
    category: Category;
    description: string;
    amount: number;
    startDate: Date;
    endDate: Date;
    reminderType: string;
    active: boolean;
  }
