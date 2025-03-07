import styles from "./videoAbout.module.scss";

export const VideoAbout = () => {

  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        poster="/images/screenserver_about.png"
        src="/videos/aboutVideo.mp4"
        loop
        // muted
        controls
      />
    </div>
  );
};
