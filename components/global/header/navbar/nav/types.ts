import type { LegacyRef } from 'react';

import type { TNavItems } from '@/utils';

export interface NavProps {
  isMenuOpen: boolean;
  items: TNavItems;
  ref: LegacyRef<HTMLUListElement>;
  toggleNav: () => void;
}
