'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { FC } from 'react';
import { useState } from 'react';

import { LinkRectangle } from '@/components';

interface LinkRectangleProps {
  className?: string;
}

export const LinkSubscribeWrapper: FC<LinkRectangleProps> = ({ className }) => {
  const [tl, setTl] = useState<gsap.core.Timeline>();

  const { contextSafe } = useGSAP(() => {
    const newtl = gsap.timeline({
      defaults: { duration: 2, ease: 'sine.out' },
      paused: true,
    });
    setTl(newtl);
  });

  const mouseEnterHandler = contextSafe((q: HTMLElement[]) => {
    gsap.to(q, { opacity: 1, duration: 0.3, ease: 'sine.out' });
    tl?.play(0);
  });

  const mouseLeaveHandler = contextSafe((q: HTMLElement[]) => {
    gsap.to(q, { opacity: 0, duration: 0.3, ease: 'sine.out' });
    tl?.play(5);
  });

  return (
    <div className={className}>
      <LinkRectangle
        href='https://t.me/rocknword'
        id={3}
        mouseEnterHandler={mouseEnterHandler}
        mouseLeaveHandler={mouseLeaveHandler}
        tl={tl}
      >
        подписаться
      </LinkRectangle>
    </div>
  );
};
