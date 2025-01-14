'use client';

import type { ReactRef } from '@gsap/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const UseTextColoredAnimation = (ref: ReactRef) =>
  useGSAP(
    () => {
      const spanArray: HTMLElement[] = gsap.utils.toArray('.text-highlight');
      spanArray.forEach((highlight: HTMLElement) => {
        ScrollTrigger.create({
          trigger: highlight,
          start: '0px center',
          onEnter: () => highlight.classList.add('active'),
        });
      });
    },
    { scope: ref },
  );
