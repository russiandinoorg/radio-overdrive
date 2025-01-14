import classnames from 'classnames';
import { forwardRef } from 'react';
import type { FC } from 'react';

import { Typography } from '@/components';
import { IconLogoOverdrive } from '@/components/icons';

import styles from './nav.module.scss';
import type { NavProps } from './types';

export const Nav: FC<NavProps> = forwardRef(({ items, isMenuOpen, toggleNav }, ref) => {
  const menuOpen = isMenuOpen ? styles.menuOpen : '';

  return (
    <nav className={styles.wrapper}>
      <ul ref={ref} className={classnames(styles.menu, menuOpen)}>
        {items.map((item, i) => (
          <Typography key={i} className={styles.menu_item} tag='li' variant='text8'>
            <a aria-label='Навигация' href={item.slug} onClick={() => toggleNav()}>
              {item.isLogo ? <IconLogoOverdrive className={styles.logo} /> : item.name}
            </a>
          </Typography>
        ))}
      </ul>
    </nav>
  );
});
