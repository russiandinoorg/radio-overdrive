import classnames from 'classnames';
import type { FC } from 'react';

import styles from './burger.module.scss';
import type { BurgerProps } from './types';

export const Burger: FC<BurgerProps> = ({ toggleNav, isMenuOpen }) => {
  const menuOpen = isMenuOpen ? styles.menuOpen : '';
  return (
    <button
      aria-label='открыть / закрыть'
      className={classnames(styles.burger, menuOpen)}
      onClick={() => toggleNav()}
    >
      <span className={styles.burger__line} />
      <span className={styles.burger__line} />
      <span className={styles.burger__line} />
    </button>
  );
};
