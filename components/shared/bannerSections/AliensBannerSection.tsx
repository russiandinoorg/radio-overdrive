'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';

import { Typography, LinkRectangle } from '@/components';

import styles from './bannerSections.module.scss';

const AliensBannerSection = () => {
  const [tl, setTl] = useState<gsap.core.Timeline>();

  const { contextSafe } = useGSAP(() => {
    const newTl = gsap.timeline({
      defaults: { duration: 2, ease: 'sine.out' },
      paused: true,
    });
    setTl(newTl);
  });

  const mouseEnterHandler = contextSafe((q: HTMLElement[]) => {
    gsap.to(q, { opacity: 1, duration: 0.3, ease: 'sine.out' });
    tl?.play(0);
  });

  const mouseLeaveHandler = contextSafe((q: HTMLElement[]) => {
    gsap.to(q, { opacity: 0, duration: 0.3, ease: 'sine.out' });
    tl?.play(5);
  });

  return (
    <section className={styles.aliens}>
      <div className={styles.container}>
        <Typography className='title-appear' tag='h2' variant='title2'>
          пришельцы
        </Typography>
        <Typography className={styles.description} tag='p' variant='text2'>
          {' '}
          Прямые эфиры с музыкантами, писателями, философами и другими гостями не от мира сего.
        </Typography>
        <LinkRectangle
          className={styles.link}
          href='./aliens'
          id={2}
          mouseEnterHandler={mouseEnterHandler}
          mouseLeaveHandler={mouseLeaveHandler}
          tl={tl}
        >
          слушать
        </LinkRectangle>
      </div>
    </section>
  );
};

export default AliensBannerSection;
