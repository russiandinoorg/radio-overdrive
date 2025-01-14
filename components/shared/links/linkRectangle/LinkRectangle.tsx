'use client';

import { useGSAP } from '@gsap/react';
import classnames from 'classnames';
import gsap from 'gsap';
import { useRef, type FC } from 'react';

import styles from './linkRectangle.module.scss';
import type { LinkRectangleProps } from './types';

gsap.registerPlugin(useGSAP);

export const LinkRectangle: FC<LinkRectangleProps> = ({
  className,
  children,
  href,
  isNewWindow = false,
  tl,
  mouseEnterHandler,
  mouseLeaveHandler,
  id,
}) => {
  const el = useRef<HTMLAnchorElement>(null);
  const q = gsap.utils.selector(el);

  useGSAP(() => {
    const feDisplacementMaps: SVGRectElement[] = gsap.utils.toArray(q('.feDisplacementMap'));

    if (tl) {
      tl.to(q(`#lightning${id}`), { opacity: 1, duration: 0.3 })
        .to(q('.border-gradient'), { opacity: 1 })
        .to(feDisplacementMaps[0], { attr: { scale: '10' }, ease: 'rough' }, 0)
        .to(feDisplacementMaps[1], { attr: { scale: '30' }, ease: 'rough' }, 0)
        .to(feDisplacementMaps[3], { attr: { scale: '40' }, ease: 'rough' }, 0)
        .to(q(`#lightning${id}`), { opacity: 0.9, duration: 0.3 }, '-=0.4');
    }
  }, [tl]);

  return (
    <a
      ref={el}
      className={classnames(styles.link, className)}
      href={href}
      rel='noreferrer'
      target={isNewWindow ? '_blank' : '_self'}
      onMouseEnter={() => mouseEnterHandler(q('.scribbles'))}
      onMouseLeave={() => mouseLeaveHandler(q('.scribbles'))}
    >
      {children}
      <svg
        aria-hidden='true'
        className={classnames(styles.scribbles, 'scribbles')}
        id='scribbles'
        preserveAspectRatio='none'
        viewBox='0 0 100 50'
      >
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='200'
          id={`glow${1 + id}`}
          width='200'
          x='-50'
          y='-50'
        >
          <feGaussianBlur stdDeviation='10' />
          <feComponentTransfer>
            <feFuncA slope='2' type='linear' />
          </feComponentTransfer>
          <feBlend in2='SourceGraphic' />
        </filter>
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='200'
          id={`filter${1 + id}`}
          width='200'
          x='-50'
          y='-50'
        >
          <feTurbulence baseFrequency='0.15 0' numOctaves='1' result='warp' type='fractalNoise' />
          <feDisplacementMap
            className='feDisplacementMap'
            in='SourceGraphic'
            in2='warp'
            scale='5'
            xChannelSelector='R'
            yChannelSelector='G'
          />
        </filter>
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='200'
          id={`filter${2 + id}`}
          width='200'
          x='-50'
          y='-50'
        >
          <feTurbulence baseFrequency='0.2 0' numOctaves='1' result='warp' type='fractalNoise' />
          <feDisplacementMap
            className='feDisplacementMap'
            in='SourceGraphic'
            in2='warp'
            scale='10'
            xChannelSelector='R'
            yChannelSelector='G'
          />
        </filter>
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='200'
          id={`filter${3 + id}`}
          width='200'
          x='-50'
          y='-50'
        >
          <feTurbulence baseFrequency='0.2 0.2' numOctaves='1' result='warp' type='fractalNoise' />
          <feDisplacementMap
            className='feDisplacementMap'
            in='SourceGraphic'
            in2='warp'
            scale='5'
            xChannelSelector='R'
            yChannelSelector='G'
          />
        </filter>
        <filter
          className='filter2'
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='200'
          id={`filter${4 + id}`}
          width='200'
          x='-50'
          y='-50'
        >
          <feTurbulence baseFrequency='0.2 0.2' numOctaves='1' result='warp' type='fractalNoise' />
          <feDisplacementMap
            className='feDisplacementMap'
            in='SourceGraphic'
            in2='warp'
            scale='5'
            xChannelSelector='R'
            yChannelSelector='G'
          />
        </filter>

        <linearGradient gradientUnits='userSpaceOnUse' id={`gradient${1 + id}`}>
          <stop offset='0%' stopColor='#5b31c0' />
          <stop offset='10%' stopColor='#5b31c0' />
          <stop offset='50%' stopColor='#9337d4' />
          <stop offset='100%' stopColor='#fff' />
        </linearGradient>

        <linearGradient
          gradientTransform='rotate(65)'
          gradientUnits='userSpaceOnUse'
          id={`gradient${2 + id}`}
        >
          <stop offset='0%' stopColor='#5b31c0' />
          <stop offset='10%' stopColor='#5b31c0' />
          <stop offset='50%' stopColor='#9337d4' />
          <stop offset='100%' stopColor='#fff' />
        </linearGradient>

        <linearGradient gradientUnits='userSpaceOnUse' id={`gradient${3 + id}`}>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='50%' stopColor='#9337d4' />
          <stop offset='100%' stopColor='#fff' />
        </linearGradient>

        <g
          className='lightning'
          filter={`url(#glow${1 + id})`}
          id={`lightning${id}`}
          stroke={`url(#gradient${1 + id})`}
          strokeWidth='1'
        >
          <rect
            className='strike'
            fill='none'
            filter={`url(#filter${1 + id})`}
            height='50'
            rx='0'
            stroke={`url(#gradient${1 + id})`}
            strokeMiterlimit='10'
            strokeWidth='1.5'
            width='100'
            x='0'
            y='0'
          />

          <rect
            className='strike'
            fill='none'
            filter={`url(#filter${2 + id})`}
            height='50'
            rx='0'
            stroke={`url(#gradient${2 + id})`}
            strokeMiterlimit='10'
            strokeWidth='2'
            width='100'
            x='0'
            y='0'
          />
          <rect
            className='strike'
            fill='none'
            filter={`url(#filter${3 + id})`}
            height='50'
            rx='0'
            stroke={`url(#gradient${3 + id})`}
            strokeMiterlimit='10'
            strokeWidth='1.5'
            width='100'
            x='0'
            y='0'
          />
          <rect
            className='strike'
            fill='none'
            filter={`url(#filter${2 + id})`}
            height='50'
            rx='0'
            stroke={`url(#gradient${3 + id})`}
            strokeMiterlimit='10'
            strokeWidth='1'
            width='100'
            x='0'
            y='0'
          />
          <rect
            className='strike'
            fill='none'
            filter={`url(#filter${4 + id})`}
            height='50'
            rx='0'
            stroke={`url(#gradient${3 + id})`}
            strokeMiterlimit='10'
            strokeWidth='1.5'
            width='100'
            x='0'
            y='0'
          />
        </g>
      </svg>
    </a>
  );
};
