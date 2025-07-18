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

import { IconArrowBack } from '@/components/icons/IconArrowBack';
import { IconArrowForward } from '@/components/icons/IconArrowForward';

const tp = new Typograf({ locale: ['ru', 'en-US'] });

export const Radio = ({ radioItems }: { radioItems: ShowcaseRadio[] }) => {
  const [currentSong, setCurrentSong] = useState<ShowcaseRadio>(radioItems[0]);
  const [tracklist, settracklist] = useState(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showRadioList, setShowRadioList] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [hasMovedForward, setHasMovedForward] = useState(false);

  const getAudioUrl = (song: ShowcaseRadio) => {
    // @ts-expect-error sanity
    const audioFile: AudioFile = song.audio && projectId && getFile(song.audio.asset, client.config());
    return audioFile.asset.url;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }

    if ('mediaSession' in navigator && currentSong) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentSong.title,
        artist: tp.execute(currentSong.presenter),
        album: tp.execute(currentSong.date),
      });

      navigator.mediaSession.setActionHandler('play', () => {
        audioRef.current?.play().then(() => setIsPlaying(true)).catch(console.warn);
      });

      navigator.mediaSession.setActionHandler('pause', () => {
        audioRef.current?.pause();
        setIsPlaying(false);
      });

      navigator.mediaSession.setActionHandler('previoustrack', () => prevSong());
      navigator.mediaSession.setActionHandler('nexttrack', () => nextSong());
    }
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.warn('Autoplay error:', error);
        setIsPlaying(false);
      });
    }
  }, [isPlaying]);

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
    setHasMovedForward(true);
  };

  const prevSong = () => {
    const currentIndex = radioItems.findIndex((s) => s.title === currentSong.title);
    const prevIndex = (currentIndex - 1 + radioItems.length) % radioItems.length;
    setCurrentSong(radioItems[prevIndex]);
    if (prevIndex === 0) {
      setHasMovedForward(false);
    }
  };

  const nextSong = () => {
    const currentIndex = radioItems.findIndex((s) => s.title === currentSong.title);
    const nextIndex = (currentIndex + 1) % radioItems.length;
    setCurrentSong(radioItems[nextIndex]);
    setHasMovedForward(true);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.frame}>
          <div className={styles.broadcastWrapper}>
            <div className={styles.currentTrackWrapper}>
              <Typography tag='p' variant='text5' className={styles.textPlay}>
                в&nbsp;эфире:
              </Typography>
              <div className={styles.artist}>
                {currentSong && (
                  <>
                    <div className={styles.desktopView}>
                      <div className={styles.marquee}>
                        <div className={styles.marqueeContent}>
                          {[...Array(2)].map((_, i) => (
                            <Typography className={styles.title} tag='p' variant='text3' key={i}>
                              {currentSong?.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Typography>
                          ))}
                        </div>
                      </div>
                      <div className={styles.presenter}>
                        <Typography className={styles.artistText} tag="p" variant="text">
                          {tp.execute(currentSong.presenter)}&nbsp;{tp.execute(currentSong.date)}
                        </Typography>
                      </div>
                    </div>

                    <div className={styles.mobileView}>
                      <div className={styles.marqueeMobile}>
                        <div className={styles.marqueeContentMobile}>
                          {[...Array(2)].map((_, i) => (
                            <Typography className={styles.mobileText} tag="p" variant="text3" key={`mobile-${i}`}>
                              {currentSong?.title}&nbsp; &nbsp;
                              {tp.execute(currentSong.presenter)}&nbsp;{tp.execute(currentSong.date)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Typography>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className={styles.controls}>
              <div style={{ width: '70vw' }}>
                <Player.PlayerSong
                  audioRef={audioRef}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  songInfo={songInfo}
                  setSongInfo={setSongInfo}
                  renderControlsWrapper={(control) => (
                    <div className={styles.controls}>
                      <div
                        className={classnames(styles.controls_arrow, {
                          [styles.hidden]: !hasMovedForward,
                        })}
                        aria-label="назад"
                        onClick={hasMovedForward ? prevSong : undefined}
                      >
                        <IconArrowBack />
                      </div>
                      {control}
                      <div className={styles.controls_arrow} aria-label="вперёд" onClick={nextSong}>
                        <IconArrowForward />
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
            <audio
              ref={audioRef}
              src={getAudioUrl(currentSong)}
              onEnded={songEndHandler}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={timeUpdateHandler}
              preload="none"
              onError={() => console.warn('Ошибка загрузки аудио')}
            />
            <div className={styles.volumeContainer}>
              <Volume audioRef={audioRef} />
              <button
                aria-label='открыть / закрыть'
                className={classnames(styles.button, tracklist ? styles.close : styles.open)}
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

      <div className={classnames(styles.trackWrapper, { [styles.open]: tracklist })}>
        {currentSong?.tracklist?.map((track, i) => (
          <Typography key={i} className={styles.track} tag='p' variant='text4'>
            {track}
          </Typography>
        ))}

        {showRadioList && radioItems.map((song) => (
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
    </section>
  );
};