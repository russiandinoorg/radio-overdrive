import type { Dispatch, RefObject, SetStateAction } from 'react';

import type { ISong, ISongInfo } from '@/components/pages/podcastPageWrapper/types';
import type { ShowcaseRadio } from '@/types/types';

export interface LibraryProps {
  songs: ISong[];
  setCurrentSong: (value: ISong) => void;
  audioRef: RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  setSongs: (value: ISong[]) => void;
  overSign: boolean;
}

export interface LibrarySongProps {
  song: ISong;
  songs: ISong[];
  setCurrentSong: (value: ISong) => void;
  audioRef: RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  setSongs: (value: ISong[]) => void;
  id: string;
  overSign: boolean;
}

export interface PlayerSongProps {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  audioRef: RefObject<HTMLMediaElement | null>;
  setSongInfo?: (value: ISongInfo) => void;
  setCurrentSong?: Dispatch<SetStateAction<ShowcaseRadio>>;
  setSongs?: Dispatch<SetStateAction<ShowcaseRadio[]>>;
  songInfo?: ISongInfo;
  songs?: ShowcaseRadio[];
}

export interface SongProps {
  currentSong: ISong;
  overSign: boolean;
}

export interface VolumeProps {
  audioRef: RefObject<HTMLMediaElement | null>;
}