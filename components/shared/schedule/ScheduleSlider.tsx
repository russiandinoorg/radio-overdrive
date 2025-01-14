'use client';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import { Typography } from '@/components';
import { IconArrowNext, IconArrowPrev } from '@/components/icons';
import type { ShowcaseSchedule } from '@/types/types';

import { ScheduleCard } from './ScheduleCard';
import styles from './scheduleSlider.module.scss';

const ScheduleSlider = ({ showcaseSchedule }: { showcaseSchedule: ShowcaseSchedule[] }) => {
  // solving the 'splide has no child at all' problem with the map method on android
  let [firstSlide] = showcaseSchedule.slice(0, 1);
  const allSlides = showcaseSchedule.slice(1);

  if (showcaseSchedule && !Array.isArray(showcaseSchedule)) {
    firstSlide = showcaseSchedule;
  }

  return (
    <Splide
      aria-label='schedule'
      hasTrack={false}
      options={{
        rewind: true,
        gap: '1rem',
        type: 'loop',
        focus: 'center',
        perPage: 1,
        mediaQuery: 'min',
        breakpoints: {
          1024: {
            perPage: 3,
          },
        },
      }}
    >
      <div className='splide__arrows'>
        <button aria-label='назад' className='splide__arrow splide__arrow--prev'>
          <IconArrowPrev />
        </button>
        <button aria-label='вперёд' className='splide__arrow splide__arrow--next'>
          <IconArrowNext />
        </button>
      </div>
      <SplideTrack>
        <SplideSlide>
          <Typography className={styles.title} tag='h3' variant='title4'>
            {firstSlide && firstSlide.day}
          </Typography>
          {firstSlide &&
            firstSlide.scheduleItems &&
            firstSlide.scheduleItems.map((item, i) => (
              <div key={i} className={styles.card}>
                <Typography className={styles.time} tag='p' variant='title5'>
                  {item.time}
                </Typography>
                <Typography className={styles.name} tag='p' variant='text'>
                  {item.event}
                </Typography>
              </div>
            ))}
        </SplideSlide>
        {allSlides &&
          allSlides.map((info, i) => (
            <SplideSlide key={i}>
              <ScheduleCard info={info} />
            </SplideSlide>
          ))}
      </SplideTrack>
    </Splide>
  );
};

export default ScheduleSlider;
