'use client';

import type { FC } from 'react';

import { LibrarySong } from './LibrarySong';
import styles from './player.module.scss';
import type { LibraryProps } from './types';

export const Library: FC<LibraryProps> = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  setSongs,
  overSign,
}) => (
  <div className={styles.library}>
    <div className={styles.librarySongs}>
      {songs.map((song) => (
        <LibrarySong
          key={song.id}
          audioRef={audioRef}
          id={song.id}
          isPlaying={isPlaying}
          overSign={overSign}
          setCurrentSong={setCurrentSong}
          setIsPlaying={setIsPlaying}
          setSongs={setSongs}
          song={song}
          songs={songs}
        />
      ))}
    </div>
  </div>
);
