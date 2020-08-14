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
        title: 'Currencies',
        icon: { icon: 'fa-money-bill-alt', pack: 'font-awesome' },
        link: '/pages/currency',
      },
      {
        title: 'Currencies',
        icon: { icon: 'fa-money-bill-alt', pack: 'font-awesome' },
        link: '/pages/general/currency',
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
