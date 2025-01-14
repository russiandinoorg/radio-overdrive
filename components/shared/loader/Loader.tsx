import { IconLogoOverdrive } from '@/components/icons';

import styles from './loader.module.scss';

export const Loader = () => (
  <div className={styles.loaderWrapper}>
    <span className={styles.circleOuter} />
    <span className={styles.circleInner} />
    <div className={styles.loader}>
      <IconLogoOverdrive />
    </div>
  </div>
);
