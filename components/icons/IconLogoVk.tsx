import type { ComponentPropsWithRef, FC } from 'react';

export const IconLogoVk: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='none'
    height='58'
    viewBox='0 0 58 58'
    width='58'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#filter0_b_1558_7798)'>
      <rect fill='url(#paint0_linear_1558_7798)' height='58' rx='29' width='58' />
      <rect
        height='57.5'
        rx='28.75'
        stroke='url(#paint1_linear_1558_7798)'
        strokeWidth='0.5'
        width='57.5'
        x='0.25'
        y='0.25'
      />
      <circle cx='29' cy='29' r='28.75' stroke='url(#paint2_linear_1558_7798)' strokeWidth='0.5' />
      <path
        d='M16.647 18.6497H11.0664C11.4957 34.3421 20.272 40.4474 30.8131 40.2089V32.2911C35.7736 32.5296 39.2078 35.7253 41.1157 40.2089H46.8394C44.8188 34.5659 40.8773 31.0033 36.9661 29.477C40.6865 27.7599 44.4546 24.0395 45.5993 18.6497H40.1618C38.4135 23.6179 35.6782 26.949 30.8131 27.7599V18.6497H25.9957V34.3421C19.8427 32.7204 16.9766 27.0661 16.647 18.6497Z'
        stroke='white'
        strokeWidth='0.5'
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
        height='62'
        id='filter0_b_1558_7798'
        width='62'
        x='-2'
        y='-2'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation='1' />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1558_7798' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_backgroundBlur_1558_7798'
          mode='normal'
          result='shape'
        />
      </filter>
      <linearGradient
        gradientUnits='userSpaceOnUse'
        id='paint0_linear_1558_7798'
        x1='8.7'
        x2='67.7013'
        y1='-40.9625'
        y2='-30.6712'
      >
        <stop stopColor='#9337D4' />
        <stop offset='1' stopColor='#5B31C0' />
      </linearGradient>
      <linearGradient
        gradientUnits='userSpaceOnUse'
        id='paint1_linear_1558_7798'
        x1='8.7'
        x2='67.7013'
        y1='-40.9625'
        y2='-30.6712'
      >
        <stop stopColor='#9337D4' />
        <stop offset='1' stopColor='#5B31C0' />
      </linearGradient>
      <linearGradient
        gradientUnits='userSpaceOnUse'
        id='paint2_linear_1558_7798'
        x1='8.7'
        x2='67.7013'
        y1='-40.9625'
        y2='-30.6712'
      >
        <stop stopColor='#9337D4' />
        <stop offset='1' stopColor='#5B31C0' />
      </linearGradient>
    </defs>
  </svg>
);
