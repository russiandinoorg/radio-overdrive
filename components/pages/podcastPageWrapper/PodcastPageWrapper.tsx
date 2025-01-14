import classnames from 'classnames';
import type { FC } from 'react';

import { Typography } from '@/components';

import styles from './podcastPageWrapper.module.scss';

export interface PodcastPageWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const PodcastPageWrapper: FC<PodcastPageWrapperProps> = ({
  title,
  description,
  className,
  children,
}) => (
  <>
    <div className={styles.title}>
      <Typography tag='h2' variant='title2'>
        {title}
      </Typography>
      <Typography className={styles.description} tag='p' variant='text2'>
        {description}
      </Typography>
    </div>
    <div className={classnames(styles.wrapper, className)}>{children}</div>
  </>
);
