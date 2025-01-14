export const navItemsInfo = [
  {
    id: 1,
    name: 'о нас',
    slug: '/#about',
    offset: 10,
    isLogo: false,
  },
  {
    id: 2,
    name: 'ведущие',
    slug: '/#presenters',
    offset: -10,
    isLogo: false,
  },
  {
    id: 3,
    name: 'о’капелла',
    slug: '/ocapella',
    offset: 0,
    isLogo: false,
  },
  {
    id: 4,
    name: '',
    slug: '/#welcome',
    offset: 0,
    isLogo: true,
  },
  {
    id: 5,
    name: 'пришельцы',
    slug: '/aliens',
    offset: 0,
    isLogo: false,
  },
  {
    id: 6,
    name: 'программа',
    slug: '/#program',
    offset: -10,
    isLogo: false,
  },
  {
    id: 7,
    name: 'контакты',
    slug: '/#contacts',
    offset: 0,
    isLogo: false,
  },
];

export type TNavItems = typeof navItemsInfo;
