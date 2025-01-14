'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';

import { Typography, LinkRectangle } from '@/components';

import styles from './bannerSections.module.scss';

const OcapellaBannerSection = () => {
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
    <section className={styles.ocapella}>
      <div className={styles.container}>
        <Typography className='title-appear' tag='h2' variant='title2'>
          о’капелла
        </Typography>
        <Typography className={styles.description} tag='p' variant='text2'>
          {' '}
          Подкаст о музыке как феномене и чуде.
        </Typography>
        <LinkRectangle
          className={styles.link}
          href='./ocapella'
          id={1}
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

export default OcapellaBannerSection;
