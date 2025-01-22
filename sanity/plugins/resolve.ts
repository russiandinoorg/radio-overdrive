import { defineLocations } from 'sanity/presentation';

import { resolveHref } from '@/sanity/lib/utils';

export const locations = {
  home: defineLocations({
    message: 'Отображение главной страницы',
    tone: 'positive',
    locations: [{ title: 'Home', href: resolveHref('home')! }],
  }),
};
