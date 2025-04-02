'use client';

import { getFile } from '@sanity/asset-utils';
import classnames from 'classnames';
import { useRef, useState } from 'react';
import Typograf from 'typograf';

import { Typography, Player } from '@/components';
import { projectId } from '@/sanity/lib/api';
import { client } from '@/sanity/lib/client';
import type { ShowcaseRadio } from '@/types/types';

import styles from './radio.module.scss';
import type { AudioFile } from './types';

const tp = new Typograf({ locale: ['ru', 'en-US'] });

export const Radio = ({ radioItems }: { radioItems: ShowcaseRadio[] }) => {
  const [songs, setSongs] = useState<ShowcaseRadio[]>(radioItems);
  const [currentSong, setCurrentSong] = useState<ShowcaseRadio>(radioItems[0]);
  const [tracklist, settracklist] = useState(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLMediaElement | null>(null);

  const setAudioRef = (currentSongValue: ShowcaseRadio) => {
    // @ts-expect-error 3 lib
    const audioFile: AudioFile =
      // @ts-expect-error 3 lib
      currentSongValue.audio && projectId && getFile(currentSongValue.audio.asset, client.config());
    const audioUrl = audioFile.asset.url;
    return audioUrl;
  };

  const audioUrl = currentSong ? setAudioRef(currentSong) : '';


  const songEndHandler = () => {
    const currentIndex = songs.findIndex((song) => song.title === currentSong.title);

    const nextSong = (songs[(currentIndex + 1) % songs.length]);
    setCurrentSong(nextSong);
    
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

  const tracklistHandler = () => {
    settracklist((prevTracklist) => !prevTracklist);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.frame}>
          <div className={styles.broadcastWrapper}>
            <div>
              <Player.PlayerSong
                audioRef={audioRef}
                isPlaying={isPlaying}
                setCurrentSong={setCurrentSong}
                setIsPlaying={setIsPlaying}
                setSongs={setSongs}
                songs={songs}
              />
              <audio ref={audioRef} src={audioUrl} onEnded={songEndHandler}>
                <track kind='captions' />
                <source src={audioUrl} type='audio/mp3' />
              </audio>
            </div>
            <Typography className={styles.live} tag='p' variant='text5'>
              в эфире:
            </Typography>
            <div className={styles.currentTrackWrapper}>
              <Typography className={styles.title} tag='p' variant='text3'>
                {currentSong && currentSong.title}
              </Typography>
              <div className={styles.artist}>
                <Typography className={styles.artistText} tag='p' variant='text'>
                  {currentSong && tp.execute(currentSong.presenter)}
                </Typography>
                <Typography className={styles.artistText} tag='p' variant='text'>
                  {currentSong && tp.execute(currentSong.date)}
                </Typography>
              </div>
            </div>
          </div>
          <div>
            <button
              aria-label='открыть / закрыть'
              className={
                tracklist
                  ? classnames(styles.button, styles.close)
                  : classnames(styles.button, styles.open)
              }
              onClick={tracklistHandler}
            >
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <div
        className={tracklist ? classnames(styles.trackWrapper, styles.open) : styles.trackWrapper}
      >
        {currentSong &&
          currentSong.tracklist &&
          currentSong.tracklist.map((track, i) => (
            <Typography key={i} className={styles.track} tag='p' variant='text4'>
              {track}
            </Typography>
          ))}
      </div>
    </section>
  );
};
