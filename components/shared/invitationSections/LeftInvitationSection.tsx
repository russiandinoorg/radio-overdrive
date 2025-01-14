import { Typography } from '@/components';

import styles from './invitationSections.module.scss';

export const LeftInvitationSection = () => (
  <section className={styles.mail}>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography className={styles.title} tag='h3' variant='title3'>
          МЫ ЖДЁМ ВАШИ ПИСЬМА
        </Typography>
        <Typography className={styles.description} tag='p' variant='text2'>
          Пишите нам письма — если хотите с нами сотрудничать, быть волонтёром, прислать новый
          релиз, поделиться идеей программы, обратиться к ведущим и слушателям{' '}
          <span className='text-highlight'>или просто так</span>:
        </Typography>
        <p>
          <a href='mailto:radio@russiandino.ru' rel='noreferrer' target='_blank'>
            <Typography className={styles.mailLink} tag='span' variant='text9'>
              radio@russiandino.ru
            </Typography>
          </a>
        </p>
      </div>
    </div>
  </section>
);
