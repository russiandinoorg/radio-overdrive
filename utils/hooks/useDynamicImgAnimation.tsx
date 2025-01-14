'use client';

import type { ReactRef } from '@gsap/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const UseDynamicImgAnimation = (ref: ReactRef) =>
  useGSAP(
    () => {
      const imgArray: HTMLElement[] = gsap.utils.toArray('.dynamic-img');
      imgArray.forEach((dynamic: HTMLElement) => {
        ScrollTrigger.create({
          trigger: dynamic,
          start: '0px center',
          onEnter: () => dynamic.classList.add('active'),
        });
      });
    },
    { scope: ref },
  );
