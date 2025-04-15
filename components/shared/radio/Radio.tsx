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
import { LinkUnderline } from '@/components';
import type { AudioFile } from './types';
import { Volume } from '../player/Volume';

const tp = new Typograf({ locale: ['ru', 'en-US'] });

export const Radio = ({ radioItems }: { radioItems: ShowcaseRadio[] }) => {
  const [songs, setSongs] = useState<ShowcaseRadio[]>(radioItems);
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

  useEffect(() => {
    const savedSong = localStorage.getItem('currentSong');
    if (savedSong) {
      const parsedSong = JSON.parse(savedSong);
      const foundSong = radioItems.find((song) => song.title === parsedSong.title);
      if (foundSong) {
        setCurrentSong(foundSong);
      }
    } else {
      setCurrentSong(radioItems[0]);
    }
  }, [radioItems]);

  useEffect(() => {
    if (currentSong) {
      localStorage.setItem('currentSong', JSON.stringify(currentSong));
    }
  }, [currentSong]);

  const setAudioRef = (song: ShowcaseRadio) => {
    // @ts-expect-error 3 lib
    const audioFile: AudioFile =
      // @ts-expect-error 3 lib
      song.audio && projectId && getFile(song.audio.asset, client.config());
    const audioUrl = audioFile.asset.url;
    return audioUrl;
  };

  const songEndHandler = () => {
    const currentIndex = songs.findIndex((song) => song.title === currentSong.title);
    const nextSong = songs[(currentIndex + 1) % songs.length];
    setCurrentSong(nextSong);
  };

  const tracklistHandler = () => {
    settracklist((prevTracklist) => !prevTracklist);
  };

  const toggleRadioList = () => {
    setShowRadioList((prev) => !prev);
  };

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


  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.frame}>
          <div className={styles.broadcastWrapper}>
            <div>
              <div className={styles.radio__container}>
                <div className={styles.play}>
                  <LinkUnderline>
                    <Typography className={styles.live} tag='p' variant='text5' >
                      в эфире:
                    </Typography>
                  </LinkUnderline>
                </div>
                <div onClick={toggleRadioList}>
                  <div className={styles.currentTrackWrapper}>
                    <Typography className={styles.title} tag='p' variant='text3'>
                      {currentSong && currentSong.title}
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
                src={currentSong ? setAudioRef(currentSong) : ''}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises, react/jsx-sort-props
                onEnded={songEndHandler}
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}>
                <track kind='captions' />
                {currentSong && <source src={setAudioRef(currentSong)} type='audio/mp3' />}
              </audio>
            </div>
            <Volume audioRef={audioRef} />
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
        {currentSong?.tracklist?.map((track, i) => (
          <Typography key={i} className={styles.track} tag='p' variant='text4'>
            {track}
          </Typography>
        ))}
        {
          showRadioList && (
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
          )
        }
      </div>
    </section>
  );
};