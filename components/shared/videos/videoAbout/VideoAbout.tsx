"use client";
import { useRef, useState } from "react";
import styles from "./videoAbout.module.scss";

export const VideoAbout = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [_, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.container} onAuxClick={handlePlay}>
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
