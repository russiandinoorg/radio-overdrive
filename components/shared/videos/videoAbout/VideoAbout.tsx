/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-sort-props */
import styles from "./videoAbout.module.scss";

export const VideoAbout = () => (
    <div className={styles.container}>
      <video
        className={styles.video}
        controls
        loop
        poster="/images/screenserver_about.png"
        src="/videos/aboutVideo.mp4"
      />
    </div>
  );
