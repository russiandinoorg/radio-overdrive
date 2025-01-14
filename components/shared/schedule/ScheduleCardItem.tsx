import { Typography } from '@/components';
import type { scheduleItem } from '@/types/types';

import styles from './scheduleSlider.module.scss';

export const ScheduleCardItem = ({ items }: { items: scheduleItem[] }) =>
  items.map((item, i) => (
    <div key={i} className={styles.card}>
      <Typography className={styles.time} tag='p' variant='title5'>
        {item.time}
      </Typography>
      <Typography className={styles.name} tag='p' variant='text'>
        {item.event}
      </Typography>
    </div>
  ));
