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
        icon: { icon: 'fa-box', pack: 'font-awesome' },
        link: '/pages/transaction/simplified',
      },
      {
        title: 'Detailed',
        icon: { icon: 'fa-boxes', pack: 'font-awesome' },
        link: '/pages/transaction/detailed',
      },
    ],
  },
  {
    title: 'Credit Card Payment',
    icon: { icon: 'fa-credit-card', pack: 'font-awesome' },
    link: '/pages/transaction/credit-card-payment',
  },
  {
    title: 'Transfer',
    icon: { icon: 'fa-exchange-alt', pack: 'font-awesome' },
    link: '/pages/transaction/transfer',
  },
  {
    title: 'Account Statement',
    icon: { icon: 'fa-file-alt', pack: 'font-awesome' },
    link: '/pages/statement/account-statement',
  },
  {
    title: 'Summary',
    icon: { icon: 'fa-poll', pack: 'font-awesome' },
    children: [
      {
        title: 'Monthly',
        icon: { icon: 'fa-calendar-minus', pack: 'font-awesome' },
        link: '/pages/summary/monthly',
      },
      {
        title: 'Yearly',
        icon: { icon: 'fa-calendar-alt', pack: 'font-awesome' },
        link: '/pages/summary/yearly',
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
