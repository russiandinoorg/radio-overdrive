import styles from './videoWelcome.module.scss';

export const VideoWelcome = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className={styles.video}
    poster='./videos/wellcomeBackPoster.webp'
    src='./videos/wellcomeBack.mp4'
  />
);
