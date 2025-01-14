'use client';

import type { ReactRef } from '@gsap/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const UseTextOpacityAnimation = (ref: ReactRef) =>
  useGSAP(
    () => {
      const headlines: HTMLElement[] = gsap.utils.toArray('.title-appear');
      headlines.forEach((headline) => {
        let newHtml = '';
        for (let i = 0; i < headline.innerHTML.length; i += 1) {
          let ts = headline.innerHTML[i];
          if (ts === '<') {
            const tmpTxt = headline.innerHTML.substring(i);
            // eslint-disable-next-line prefer-destructuring
            ts = tmpTxt?.match(/<.*?>/)?.[0] || '';
            i += ts.length - 1;
          } else if (ts === ' ') ts = ' ';
          else ts = `<span style="opacity: 0; display: inline-block;">${ts}</span>`;
          newHtml += ts;
        }
        headline.innerHTML = newHtml;
        const ltrs = headline.querySelectorAll('span');
        // eslint-disable-next-line no-return-assign
        const delSpans: () => void = () =>
          (headline.innerHTML = headline.innerHTML.replace(/<span.*?>/g, ''));
        gsap
          .timeline({
            onComplete: delSpans,
            scrollTrigger: { trigger: headline, start: 'top 80%' },
          })
          .set(ltrs, { opacity: 0, x: 20, skewX: -20 })
          .to(ltrs, 0.6, { opacity: 1, x: 0, ease: 'back.out', skewX: 0, stagger: 0.0002 });
      });
    },
    { scope: ref },
  );
