import type { ComponentPropsWithRef, FC } from 'react';

export const IconButtonPlay: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='none'
    height='72'
    viewBox='0 0 72 72'
    width='72'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g id='Group 76'>
      <circle cx='36' cy='36' fill='url(#paint0_linear_1207_292)' id='Ellipse 20' r='36' />
      <path d='M50 36L29 48.1244L29 23.8756L50 36Z' fill='white' id='Polygon 1' />
    </g>
    <defs>
      <linearGradient
        gradientUnits='userSpaceOnUse'
        id='paint0_linear_1207_292'
        x1='4.41718'
        x2='54.3658'
        y1='-18.6626'
        y2='-23.9342'
      >
        <stop stopColor='#9337D4' />
        <stop offset='1' stopColor='#5B31C0' />
      </linearGradient>
    </defs>
  </svg>
);
