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
      
        gsap.fromTo(
          imgArray,
          {
            opacity: 0,
            y: 400
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'easeOut',
            stagger: 0.4,
            scrollTrigger: {
              trigger: '#about',
              start: 'top 40%',
              toggleActions: 'play none none none',
            },
          });
    },
    { scope: ref },
  );
