import { Typography } from '@/components';

import styles from './invitationSections.module.scss';

export const CentredInvitationSection = () => (
  <section className={styles.vacancy}>
    <div className={styles.container}>
      <Typography className={styles.title} tag='h3' variant='title3'>
        ХОЧЕШЬ СТАТЬ ВЕДУЩИМ РАДИО ОВЕРДРАЙВ?
      </Typography>
      <Typography className={styles.description} tag='p' variant='text2'>
        Возможно, мы ищем именно тебя: неважно в какой точке Земли ты живёшь, если тебе есть что
        сказать,<span className='text-highlight'> и ты врубаешь</span> в высокий стиль, присылай
        демо-аудио и ссылку на свой плейлист на
      </Typography>
      <p>
        <a href='mailto:radio@russiandino.ru' rel='noreferrer' target='_blank'>
          <Typography className={styles.mailLink} tag='span' variant='text9'>
            radio@russiandino.ru
          </Typography>
        </a>
      </p>
    </div>
  </section>
);
