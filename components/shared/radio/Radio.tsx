'use client';

import { getFile } from '@sanity/asset-utils';
import classnames from 'classnames';
import { useRef, useState, useEffect } from 'react';
import Typograf from 'typograf';

import { Typography, Player, LinkUnderline } from '@/components';
import { projectId } from '@/sanity/lib/api';
import { client } from '@/sanity/lib/client';
import type { ShowcaseRadio } from '@/types/types';

import styles from './radio.module.scss';
import type { AudioFile } from './types';
import { Volume } from '../player/Volume';

const tp = new Typograf({ locale: ['ru', 'en-US'] });

export const Radio = ({ radioItems }: { radioItems: ShowcaseRadio[] }) => {
  const [songs] = useState<ShowcaseRadio[]>(radioItems);
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

  // Восстановление состояния из localStorage
  useEffect(() => {
    const savedSong = localStorage.getItem('currentSong');
    const savedPlayback = localStorage.getItem('radioPlayback');

    if (savedSong) {
      const parsedSong = JSON.parse(savedSong);
      const foundSong = radioItems.find((song) => song.title === parsedSong.title);
      if (foundSong) {
        setCurrentSong(foundSong);
      }
    }

    if (savedPlayback) {
      const parsed = JSON.parse(savedPlayback);
      setSongInfo((prev) => ({
        ...prev,
        currentTime: parsed.currentTime || 0,
      }));
      setIsPlaying(parsed.isPlaying ?? false);
    }
  }, [radioItems]);

  // Обновление трека и перезагрузка <audio>
  useEffect(() => {
    if (!currentSong) return;

    localStorage.setItem('currentSong', JSON.stringify(currentSong));

    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [currentSong]);

  // Автовоспроизведение после загрузки
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch((e) => {
        console.warn('Ошибка воспроизведения:', e);
      });
    }
  }, [isPlaying]);

  const handleLoadedMetadata = () => {
    const playback = localStorage.getItem('radioPlayback');
    if (!playback || !audioRef.current || !currentSong) return;

    const { currentTime, title } = JSON.parse(playback);

    if (title === currentSong.title) {
      audioRef.current.currentTime = currentTime;
    }
  };

  const timeUpdateHandler = (e: React.ChangeEvent<HTMLMediaElement>) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      currentTime: current,
      duration,
      animationPercentage: animation,
    });

    if (currentSong) {
      localStorage.setItem(
        'radioPlayback',
        JSON.stringify({
          title: currentSong.title,
          currentTime: current,
          isPlaying,
        })
      );
    }
  };

  const songEndHandler = () => {
    const currentIndex = songs.findIndex((song) => song.title === currentSong.title);
    const nextSong = songs[(currentIndex + 1) % songs.length];
    setCurrentSong(nextSong);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.frame}>
          <div className={styles.broadcastWrapper}>
            <div>
              <div className={styles.currentTrackWrapper} onClick={() => setShowRadioList(!showRadioList)}>
                <LinkUnderline>
                  <Typography className={styles.live} tag='p' variant='text5'>
                    в эфире:
                  </Typography>
                </LinkUnderline>
                <Typography className={styles.title} tag='p' variant='text3'>
                  {currentSong?.title}
                </Typography>
                <div className={styles.artist}>
                  {currentSong && (
                    <>
                      <Typography className={styles.artistText} tag='p' variant='text'>
                        {tp.execute(currentSong.presenter)}
                      </Typography>
                      <Typography className={styles.artistText} tag='p' variant='text'>
                        {tp.execute(currentSong.date)}
                      </Typography>
                    </>
                  )}
                </div>
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

      <div className={tracklist ? classnames(styles.trackWrapper, styles.open) : styles.trackWrapper}>
        {currentSong?.tracklist?.map((track, i) => (
          <Typography key={i} className={styles.track} tag='p' variant='text4'>
            {track}
          </Typography>
        ))}

        {showRadioList && (
          <div>
            {songs.map((song) => (
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
