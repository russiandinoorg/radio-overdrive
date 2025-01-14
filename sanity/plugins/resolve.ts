import { defineLocations } from 'sanity/presentation';

import { resolveHref } from '@/sanity/lib/utils';

export const locations = {
  home: defineLocations({
    message: 'This document is used to render the front page',
    tone: 'positive',
    locations: [{ title: 'Home', href: resolveHref('home')! }],
  }),
};
