import { Category } from './category';

export class Reminder {
    idReminder: number;
    category: Category;
    description: string;
    amount: number;
    startDate: Date;
    endDate: Date;
    reminderType: string;
    active: boolean;
  }
