export interface ISong {
  name: string;
  date: string;
  cover: string;
  description: string;
  audio: string;
  id: string;
  active: boolean;
}

export interface ISongInfo {
  currentTime: number;
  duration: number;
  animationPercentage: number;
}
