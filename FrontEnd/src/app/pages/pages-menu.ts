import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: { icon: 'fa-tachometer-alt', pack: 'font-awesome' },
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'General',
    icon: { icon: 'fa-piggy-bank', pack: 'font-awesome' },
    children: [
      {
        title: 'Account',
        icon: { icon: 'fa-university', pack: 'font-awesome' },
        link: '/pages/general/account',
      },
      {
        title: 'Category',
        icon: { icon: 'fa-boxes', pack: 'font-awesome' },
        link: '/pages/general/category',
      },
      {
        title: 'Currency',
        icon: { icon: 'fa-money-bill-alt', pack: 'font-awesome' },
        link: '/pages/general/currency',
      },
      {
        title: 'Reminder',
        icon: { icon: 'fa-stopwatch', pack: 'font-awesome' },
        link: '/pages/general/reminder',
      },
    ],
  },
  {
    title: 'Transaction',
    icon: { icon: 'fa-piggy-bank', pack: 'font-awesome' },
    children: [
      {
        title: 'Simplified',
        icon: { icon: 'fa-university', pack: 'font-awesome' },
        link: '/pages/transaction/simplified',
      },
      {
        title: 'Complete',
        icon: { icon: 'fa-boxes', pack: 'font-awesome' },
        link: '/pages/transaction/complete',
      },
    ],
  },
  {
    title: 'Authentication',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
    ],
  },
];
