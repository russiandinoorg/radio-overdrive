import classnames from 'classnames';
import type { FC } from 'react';

import styles from './linkUnderline.module.scss';
import type { LinkUnderlineProps } from './types';

export const LinkUnderline: FC<LinkUnderlineProps> = ({ className, children }) => (
  <a className={classnames(className, styles.link)}>
    <span>{children}</span>
  </a>
);
