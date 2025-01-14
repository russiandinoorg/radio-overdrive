import type { ComponentPropsWithRef, FC } from 'react';

export const IconButtonStop: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='none'
    height='72'
    viewBox='0 0 72 72'
    width='72'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='36' cy='36' fill='url(#paint0_linear_2140_90)' r='36' />
    <path
      d='M24 27C24 24.7909 25.7909 23 28 23V23C30.2091 23 32 24.7909 32 27V45C32 47.2091 30.2091 49 28 49V49C25.7909 49 24 47.2091 24 45V27Z'
      fill='white'
    />
    <path
      d='M40 27C40 24.7909 41.7909 23 44 23V23C46.2091 23 48 24.7909 48 27V45C48 47.2091 46.2091 49 44 49V49C41.7909 49 40 47.2091 40 45V27Z'
      fill='white'
    />
    <defs>
      <linearGradient
        gradientUnits='userSpaceOnUse'
        id='paint0_linear_2140_90'
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
