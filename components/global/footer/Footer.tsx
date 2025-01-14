import type { FC } from 'react';

import { Typography } from '@/components';
import {
  IconLogoInstagram,
  IconLogoMail,
  IconLogoRD,
  IconLogoTelegram,
  IconLogoVk,
} from '@/components/icons';

import styles from './footer.module.scss';
import type { FooterProps } from './types';

const currentYear = new Date().getFullYear();

export const Footer: FC<FooterProps> = ({ id }) => (
  <footer className={styles.footer} id={id}>
    <div className={styles.container}>
      <div className={styles.subcontainer_first}>
        <Typography tag='h3' variant='title6'>
          Овердрайв
        </Typography>

        <div className={styles.nets_wrapper}>
          <a
            aria-label='Овердрайв в telegram'
            className={styles.net_link}
            href='https://t.me/rocknword'
            rel='noreferrer'
            target='_blank'
          >
            <IconLogoTelegram className={styles.net_logo} />
          </a>
          <a
            aria-label='Овердрайв вконтакте'
            className={styles.net_link}
            href='https://vk.com/rocknword'
            rel='noreferrer'
            target='_blank'
          >
            <IconLogoVk className={styles.net_logo} />
          </a>
          <a
            aria-label='Овердрайв в instagram'
            className={styles.net_link}
            href='https://www.instagram.com/radio_overdrive/'
            rel='noreferrer'
            target='_blank'
          >
            <IconLogoInstagram className={styles.net_logo} />
          </a>
        </div>
      </div>
      <div className={styles.subcontainer_second}>
        <a
          className={styles.mail_link}
          href='mailto:radio@russiandino.ru'
          rel='noreferrer'
          target='_blank'
        >
          <IconLogoMail className={styles.net_logo} />
          <Typography tag='p' variant='text'>
            radio@russiandino.ru
          </Typography>
        </a>

        <div className={styles.wrappe_copiright}>
          <Typography className={styles.heshtag} tag='p' variant='title8'>
            #радиоовердрайв
          </Typography>
          <Typography tag='p' variant='title8'>
            #хбдщдбдщ
          </Typography>
          <Typography className={styles.slogan} tag='p' variant='title5'>
            Мы вещаем до последнего
          </Typography>
          <Typography tag='p' variant='text'>
            © {currentYear} Радио Овердрайв. Санкт-Петербург. Все права защищены.
          </Typography>
        </div>
        <div className={styles.rd_wrapper}>
          <a
            className={styles.rd}
            href='https://www.russiandino.ru'
            rel='noreferrer'
            target='_blank'
          >
            <IconLogoRD />

            <div className={styles.rd_text}>
              <p>made by</p>
              <p className={styles.rd_russkiy}>Russkiy</p>
              <p className={styles.rd_dinozavr}>Dinozavr</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </footer>
);
