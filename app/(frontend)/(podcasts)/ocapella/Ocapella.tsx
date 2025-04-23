/* eslint-disable no-shadow */

'use client';

import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import { Typography, Player, Loader, ErrorText } from '@/components';
import {
  IconLogoApplePodcast,
  IconLogoZvuk,
  IconLogoCastbox,
  IconLogoOvercast,
} from '@/components/icons';
import { PodcastPageWrapper } from '@/components/pages/podcastPageWrapper';
import type { ISong } from '@/components/pages/podcastPageWrapper/types';
import { fetchEpisodes } from '@/utils';
import dataNative from '@/utils/data/ocapellaInfo';

import styles from './page.module.scss';
import { Volume } from '@/components/shared/player/Volume';

export const Ocapella: FC = () => {
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
    queryFn: () => fetchEpisodes('./ocappellaRSS'),
    staleTime: 10 * 1000,
  });

  useEffect(() => {
    if (status === 'success') {
      setSongs(data);
      setCurrentSong(data[0]);
    }
  }, [status, data]);

  if (isLoading) return <Loader />;

  if (error) return <ErrorText link='https://radiooverdrive.mave.digital' />;

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
    <PodcastPageWrapper description='Подкаст о музыке как феномене и чуде' title='о’капелла'>
      <div className={styles.subContainer}>
        <Player.Song overSign currentSong={currentSong} />
        <div className={styles.trackContainer}>
          <Player.PlayerSong
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setSongInfo={setSongInfo}
            songInfo={songInfo}
          />
          <Volume audioRef={audioRef} />
        </div>
        <div className={styles.nets_wrapper}>
          {' '}
          <a
            aria-label='Перейти на Apple Podcast'
            className={styles.net_link}
            href='https://podcasts.apple.com/podcast/id1551530393'
            rel='noreferrer'
            target='_blank'
          >
            <IconLogoApplePodcast className={styles.net_logo} />
            <Typography className={styles.net_tooltip} tag='span' variant='text6'>
              Apple Podcast
            </Typography>
          </a>
          <a
            aria-label='Перейти на Звук'
            className={styles.net_link}
            href='https://st.zvuk.com/okapella'
            rel='noreferrer'
            target='_blank'
          >
            <IconLogoZvuk className={styles.net_logo} />{' '}
            <Typography className={styles.net_tooltip} tag='span' variant='text6'>
              Звук
            </Typography>
          </a>
          <a
            aria-label='Перейти на Castbox'
            className={styles.net_link}
            href='https://castbox.fm/channel/id3666927?utm_campaign=ex_share_ch&utm_medium=exlink&country=ru'
            rel='noreferrer'
            target='_blank'
          >
            <IconLogoCastbox className={styles.net_logo} />{' '}
            <Typography className={styles.net_tooltip} tag='span' variant='text6'>
              Castbox
            </Typography>
          </a>
          <a
            aria-label='Перейти на Overcast'
            className={styles.net_link}
            href='https://overcast.fm/itunes1551530393'
            rel='noreferrer'
            target='_blank'
          >
            <IconLogoOvercast className={styles.net_logo} />
            <Typography className={styles.net_tooltip} tag='span' variant='text6'>
              Overcast
            </Typography>
          </a>
        </div>
      </div>
      <Player.Library
        overSign
        audioRef={audioRef}
        isPlaying={isPlaying}
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
