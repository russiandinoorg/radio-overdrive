import type { FC } from 'react';

import { Typography, LinkUnderline } from '@/components';

import styles from './errorText.module.scss';
import type { ErrorTextProps } from './types';

export const ErrorText: FC<ErrorTextProps> = ({ link }) => (
  <div className={styles.link_container}>
    <Typography className={styles.link_wrapper} tag='p' variant='text5'>
      Что-то пошло не так. Попробуй перейти на главную страницу или врубайся{' '}
      <a href={link} rel='noreferrer' target='_blank'>
        <LinkUnderline> на другом ресурсе</LinkUnderline>
      </a>
      .
    </Typography>
  </div>
);
