import { Typography } from '@/components';
import type { ShowcaseSchedule } from '@/types/types';

import { ScheduleCardItem } from './ScheduleCardItem';
import styles from './scheduleSlider.module.scss';

export const ScheduleCard = ({ info }: { info: ShowcaseSchedule }) => (
  <div className={styles.container}>
    <Typography className={styles.title} tag='h3' variant='title4'>
      {info.day}
    </Typography>
    {info.scheduleItems && <ScheduleCardItem items={info.scheduleItems} />}
  </div>
);
