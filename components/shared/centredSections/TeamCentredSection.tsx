import classnames from 'classnames';
import type { FC } from 'react';

import { Typography } from '@/components';

import styles from './centredSection.module.scss';
import type { CentredSectionProps } from './types';

export const TeamCentredSection: FC<CentredSectionProps> = ({ children, className, id }) => (
  <section className={classnames(styles.container, className)} id={id}>
    <Typography className={classnames(styles.title, 'title-appear')} tag='h2' variant='title2'>
      ведущие
    </Typography>
    {children}
  </section>
);
