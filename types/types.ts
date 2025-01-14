import type { PortableTextBlock } from 'next-sanity';
import type { Image } from 'sanity';

export interface Track {
  title: string;
}

export interface AudioFile {
  asset: {
    assetId: string;
    extension: string;
    metadata?: { string };
    path: string;
    url: string;
    _id: string;
    _type: string;
  };
}

export interface scheduleItem {
  time: string;
  event: string;
}

export interface MilestoneItem {
  description?: string;
  duration?: {
    start?: string;
    end?: string;
  };
  image?: Image;
  tags?: string[];
  title?: string;
}

export interface ShowcaseProject {
  _type: string;
  coverImage?: Image;
  overview?: PortableTextBlock[];
  slug?: string;
  tags?: string[];
  title?: string;
}

// Page payloads

export interface PagePayload {
  body?: PortableTextBlock[];
  name?: string;
  overview?: PortableTextBlock[];
  title?: string;
  slug?: string;
}

export interface ShowcasePresenter {
  coverImage?: Image;
  bio?: PortableTextBlock[];
  name?: string;
  city?: string;
  day?: string;
}

export interface ShowcaseRadio {
  tracklist: string[];
  title: string;
  presenter: string;
  date: string;
  audio: AudioFile;
}

export interface ShowcaseSchedule {
  scheduleItems?: scheduleItem[];
  day?: string;
}

export interface HomePagePayload {
  showcasePresenters?: ShowcasePresenter[];
  showcaseRadio?: ShowcaseRadio[];
  showcaseSchedule?: ShowcaseSchedule[];
}
