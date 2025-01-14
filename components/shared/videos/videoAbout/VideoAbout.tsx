import styles from './videoAbout.module.scss';

export const VideoAbout = () => (
  <div className={styles.container}>
    <video
      controls
      loop
      muted
      className={styles.video}
      poster='./videos/video-overdrive-poster.webp'
      src='/'
    />
  </div>
);
