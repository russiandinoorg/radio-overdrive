import styles from './videoAbout.module.scss';

export const VideoAbout = () => (
  <div className={styles.container}>
    <iframe
        allowFullScreen
        allow="clipboard-write; autoplay"
        className={styles.video}
        frameBorder="0"
        src="https://rutube.ru/play/embed/6c8c288569880aa3f5b30740cc2c12e4"
        title="about"
       />
  </div>

);
