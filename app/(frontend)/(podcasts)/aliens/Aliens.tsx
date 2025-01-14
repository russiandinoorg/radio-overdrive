/* eslint-disable no-shadow */

'use client';

import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import { Player, Loader, ErrorText } from '@/components';
import { PodcastPageWrapper } from '@/components/pages/podcastPageWrapper';
import type { ISong } from '@/components/pages/podcastPageWrapper/types';
import { fetchEpisodes } from '@/utils';
import dataNative from '@/utils/data/aliensInfo';

import styles from './page.module.scss';

export const Aliens: FC = () => {
  const [songs, setSongs] = useState<ISong[]>(dataNative);
  const [currentSong, setCurrentSong] = useState<ISong>(songs[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLMediaElement>(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const { status, data, isLoading, error } = useQuery({
    queryKey: ['episodes'],
    queryFn: () => fetchEpisodes('./aliensRSS'),
    staleTime: 10 * 1000,
  });

  useEffect(() => {
    if (status === 'success') {
      setSongs(data);
      setCurrentSong(data[0]);
    }
  }, [status, data]);

  if (isLoading) return <Loader />;

  if (error) return <ErrorText link='https://overdrive-prishelcy.mave.digital' />;

  const timeUpdateHandler = (e: React.ChangeEvent<HTMLMediaElement>) => {
    const current = e.target.currentTime;
    const { duration } = e.target;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };

  const activeLibraryHandler = (nextPrev: ISong) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      }
      return {
        ...song,
        active: false,
      };
    });
    setSongs(newSongs);
  };

  const songEndHandler = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    try {
      if (isPlaying && audioRef.current) {
        audioRef.current.onloadedmetadata = () => {
          audioRef.current?.play().catch((err) => {
            console.error(err);
          });
        };
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PodcastPageWrapper
      description='Прямые эфиры с музыкантами, писателями, философами и другими гостями не от мира сего'
      title='пришельцы'
    >
      <div className={styles.subContainer}>
        <Player.Song currentSong={currentSong} overSign={false} />
        <Player.PlayerSong
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
        />
      </div>
      <Player.Library
        audioRef={audioRef}
        isPlaying={isPlaying}
        overSign={false}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        setSongs={setSongs}
        songs={songs}
      />
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises, react/jsx-sort-props
        onEnded={songEndHandler}
      >
        <track kind='captions' />
        <source src={currentSong.audio} />
      </audio>
    </PodcastPageWrapper>
  );
};
