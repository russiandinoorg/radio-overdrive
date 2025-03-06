"use client";
import { useRef, useState } from "react";
import styles from "./videoAbout.module.scss";

export const VideoAbout = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [_, setIsPlaying] = useState(false);

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        className={styles.video}
        poster="/images/screenserver_about.png"
        src="/videos/aboutVideo.mp4"
        loop
        muted
        controls
      />
    </div>
  );
};
