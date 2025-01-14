'use client';

import classnames from 'classnames';
import type { FC } from 'react';
import Marquee from 'react-fast-marquee';

import { IconEllipse } from '@/components/icons';

import styles from './marqueeText.module.scss';
import type { MarqueeTextProps } from './types';

export const MarqueeText: FC<MarqueeTextProps> = ({ children, className }) => (
  <Marquee autoFill>
    <p className={classnames(className, styles.content)}>{children}</p>
    <IconEllipse className={styles.ellipse} />
  </Marquee>
);
