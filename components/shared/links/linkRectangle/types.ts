import type { ReactNode } from 'react';

export interface LinkRectangleProps {
  children: ReactNode;
  href: string;
  className?: string;
  isNewWindow?: boolean;
  tl: gsap.core.Timeline | undefined;
  mouseEnterHandler: (q: HTMLElement[]) => void;
  mouseLeaveHandler: (q: HTMLElement[]) => void;
  id: number;
}
