'use client';

import { getFile } from '@sanity/asset-utils';
import classnames from 'classnames';
import { useRef, useState, useEffect } from 'react';
import Typograf from 'typograf';

import { Typography, Player } from '@/components';
import { projectId } from '@/sanity/lib/api';
import { client } from '@/sanity/lib/client';
import type { ShowcaseRadio } from '@/types/types';

import styles from './radio.module.scss';
import type { AudioFile } from './types';
import { Volume } from '../player/Volume';
import { IconArrowNext, IconArrowPrev } from '@/components/icons';

const tp = new Typograf({ locale: ['ru', 'en-US'] });

export const Radio = ({ radioItems }: { radioItems: ShowcaseRadio[] }) => {
  const [currentSong, setCurrentSong] = useState<ShowcaseRadio>(radioItems[0]);
  const [tracklist, settracklist] = useState(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showRadioList, setShowRadioList] = useState(false);
  const audioRef = useRef<HTMLMediaElement | null>(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const getAudioUrl = (song: ShowcaseRadio) => {
    // @ts-expect-error sanity
    const audioFile: AudioFile =
      // @ts-expect-error sanity
      song.audio && projectId && getFile(song.audio.asset, client.config());
    return audioFile.asset.url;
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      setSongInfo((prev) => ({ ...prev, duration }));
    }
  };

  const timeUpdateHandler = (e: React.ChangeEvent<HTMLMediaElement>) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const animationPercentage = (current / duration) * 100;

    setSongInfo({
      currentTime: current,
      duration,
      animationPercentage,
    });
  };

  const songEndHandler = () => {
    const currentIndex = radioItems.findIndex((song) => song.title === currentSong.title);
    const nextSong = radioItems[(currentIndex + 1) % radioItems.length];
    setCurrentSong(nextSong);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(console.warn);
      }
    }
  }, [currentSong]);

  // Функции переключения эфиров
  const prevSong = () => {
    const currentIndex = radioItems.findIndex((s) => s.title === currentSong.title);
    const prevIndex = (currentIndex - 1 + radioItems.length) % radioItems.length;
    setCurrentSong(radioItems[prevIndex]);
  };

  const nextSong = () => {
    const currentIndex = radioItems.findIndex((s) => s.title === currentSong.title);
    const nextIndex = (currentIndex + 1) % radioItems.length;
    setCurrentSong(radioItems[nextIndex]);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.frame}>
          <div className={styles.broadcastWrapper}>
            <div>
              <div className={styles.currentTrackWrapper}>
                <Typography tag='p' variant='text5' className={styles.textPlay}>
                  в&nbsp;эфире:
                </Typography>

                <button aria-label='назад' className='splide__arrow splide__arrow--prev arrow' style={{ position: 'static' }} onClick={prevSong}>
                  <IconArrowPrev />
                </button>
                <div className={styles.artist}>
                  {currentSong && (
                    <>
                      <Typography className={styles.title} tag='p' variant='text3'>
                        {currentSong?.title}
                      </Typography>
                      <div style={{ display: 'flex', gap: '15px' }}>
                        <Typography className={styles.artistText} tag='p' variant='text'>
                          {tp.execute(currentSong.presenter)}
                        </Typography>
                        <Typography className={styles.artistText} tag='p' variant='text'>
                          {tp.execute(currentSong.date)}
                        </Typography>
                      </div>
                    </>
                  )}
                </div>
                <button aria-label='вперёд' className='splide__arrow splide__arrow--next' style={{ position: 'static' }} onClick={nextSong}>
                  <IconArrowNext />
                </button>
              </div>

              <div style={{ width: '70vw' }}>
                <Player.PlayerSong
                  audioRef={audioRef}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  songInfo={songInfo}
                  setSongInfo={setSongInfo}
                />
              </div>

              <audio
                ref={audioRef}
                src={currentSong ? getAudioUrl(currentSong) : ''}
                onEnded={songEndHandler}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={timeUpdateHandler}
              >
                <track kind='captions' />
                {currentSong && <source src={getAudioUrl(currentSong)} type='audio/mp3' />}
              </audio>
            </div>

            <div className={styles.volumeContainer}>
              <Volume audioRef={audioRef} />

              <button
                aria-label='открыть / закрыть'
                className={tracklist ? classnames(styles.button, styles.close) : classnames(styles.button, styles.open)}
                onClick={() => settracklist((prev) => !prev)}
              >
                {[...Array(9)].map((_, i) => (
                  <span key={i} />
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={tracklist ? classnames(styles.trackWrapper, styles.open) : styles.trackWrapper}>
        {currentSong?.tracklist?.map((track, i) => (
          <Typography key={i} className={styles.track} tag='p' variant='text4'>
            {track}
          </Typography>
        ))}

        {showRadioList && (
          <div>
            {radioItems.map((song) => (
              <div
                key={song.title}
                className={classnames(styles.radioItem, {
                  [styles.active]: song.title === currentSong?.title,
                })}
                onClick={() => {
                  setCurrentSong(song);
                  setShowRadioList(false);
                }}
              >
                <Typography tag='p' variant='text4'>
                  {song.title}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
