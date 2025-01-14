'use client';

import type { FC } from 'react';

import { Typography } from '@/components';
import { IconButtonPlay, IconButtonStop } from '@/components/icons';

import styles from './player.module.scss';
import type { PlayerSongProps } from './types';

export const PlayerSong: FC<PlayerSongProps> = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
}) => {
  const dragHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) audioRef.current.currentTime = parseInt(e.target.value, 10);
    if (setSongInfo && songInfo)
      setSongInfo({ ...songInfo, currentTime: parseInt(e.target.value, 10) });
  };
  const playSongHandler = async () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(!isPlaying);
    } else {
      await audioRef.current?.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time: number) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  const trackAnim = {
    transform: `translateX(${songInfo?.animationPercentage}%)`,
  };
  return (
    <div className={styles.player}>
      <div className={styles.playControl}>
        {!isPlaying ? (
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          <button aria-label='включить' className={styles.play} onClick={playSongHandler}>
            <IconButtonPlay />
          </button>
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          <button aria-label='выключить' className={styles.pause} onClick={playSongHandler}>
            <IconButtonStop />
          </button>
        )}
      </div>
      {songInfo && (
        <div className={styles.timeControl}>
          <div className={styles.track}>
            <input
              className={styles.trackInput}
              max={songInfo.duration || 0}
              min={0}
              type='range'
              value={songInfo.currentTime}
              onChange={dragHandler}
            />
            <div className={styles.animateTrack} style={trackAnim} />
          </div>
          <Typography className={styles.time} tag='p' variant='text4'>
            {getTime(songInfo.currentTime)} /{' '}
            {songInfo.duration ? getTime(songInfo.duration) : ' 00:00'}
          </Typography>
        </div>
      )}
    </div>
  );
};
