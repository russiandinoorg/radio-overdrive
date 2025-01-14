'use client';

import classnames from 'classnames';
import Image from 'next/legacy/image';
import type { FC } from 'react';

import { Typography } from '@/components';
import { podcastBlurData } from '@/utils/helpers';

import styles from './player.module.scss';
import type { LibrarySongProps } from './types';

export const LibrarySong: FC<LibrarySongProps> = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isPlaying,
  setIsPlaying,
  setSongs,
  id,
  overSign,
}) => {
  const songSelectHandler = async () => {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    await setCurrentSong(song);

    const newSongs = songs.map((songItem) => {
      if (songItem.id === id) {
        return {
          ...songItem,
          active: true,
        };
      }
      return {
        ...songItem,
        active: false,
      };
    });

    setSongs(newSongs);

    if (song.active) {
      audioRef.current?.pause();
      setIsPlaying((isPlaying = false));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      audioRef.current?.play();
      setIsPlaying((isPlaying = true));
    }
  };
  return (
    <div
      className={`${styles.librarySong} ${song.active ? styles.selected : ''}`}
      role='button'
      tabIndex={0}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={songSelectHandler}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onKeyDown={songSelectHandler}
    >
      <div className={styles.imageWrapper}>
        <Image
          alt={song.name.slice(song.name.indexOf('#'))}
          blurDataURL={podcastBlurData}
          className={styles.image}
          height={100}
          layout='fixed'
          placeholder='blur'
          src={song.cover}
          width={100}
        />
      </div>
      <div className={styles.songDescription}>
        {overSign ? (
          <div className={styles.title}>
            <span>
              <Typography className={styles.titlePath} tag='span' variant='text'>
                {song.name.slice(song.name.indexOf('#'), song.name.indexOf('|') + 1)}
              </Typography>
              <Typography
                className={classnames(styles.titlePath, styles.titlePath2)}
                tag='span'
                variant='text'
              >
                {song.name.slice(song.name.indexOf('|') + 2)}
              </Typography>
            </span>
          </div>
        ) : (
          <Typography className={styles.title} tag='h3' variant='text'>
            {song.name.slice(song.name.indexOf('#'))}
          </Typography>
        )}
        <Typography className={styles.date} tag='p' variant='text6'>
          {song.date.slice(0, 10).split('-').reverse().join('.')}
        </Typography>
      </div>
    </div>
  );
};
