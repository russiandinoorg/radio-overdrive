import type { ComponentPropsWithRef, FC } from 'react';

export const IconLogoTelegram: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='none'
    height='58'
    viewBox='0 0 58 58'
    width='58'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#filter0_b_1558_7799)'>
      <rect fill='url(#paint0_linear_1558_7799)' height='58' rx='29' width='58' />
      <rect
        height='57.5'
        rx='28.75'
        stroke='url(#paint1_linear_1558_7799)'
        strokeWidth='0.5'
        width='57.5'
        x='0.25'
        y='0.25'
      />
      <circle cx='29' cy='29' r='28.75' stroke='url(#paint2_linear_1558_7799)' strokeWidth='0.5' />
      <path
        d='M42.6802 13.7368C43.762 13.7368 44.5781 14.7204 44.1416 16.5498L38.8465 42.4174C38.4764 44.2567 37.4041 44.6993 35.9237 43.8436L23.2933 34.1752C23.2443 34.1388 23.2044 34.0908 23.1769 34.0352C23.1493 33.9796 23.135 33.918 23.135 33.8555C23.135 33.7931 23.1493 33.7315 23.1769 33.6759C23.2044 33.6203 23.2443 33.5723 23.2933 33.5359L37.8785 19.8841C38.5428 19.2743 37.7362 18.9792 36.8632 19.53L18.558 31.4999C18.5025 31.5374 18.4395 31.5614 18.3737 31.5699C18.308 31.5784 18.2412 31.5713 18.1785 31.5491L10.4066 29.0017C8.67955 28.4804 8.67955 27.2509 10.7957 26.3756L41.8926 13.9434C42.1392 13.8207 42.407 13.7505 42.6802 13.7368V13.7368Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='0.5'
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
        height='62'
        id='filter0_b_1558_7799'
        width='62'
        x='-2'
        y='-2'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation='1' />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1558_7799' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_backgroundBlur_1558_7799'
          mode='normal'
          result='shape'
        />
      </filter>
      <linearGradient
        gradientUnits='userSpaceOnUse'
        id='paint0_linear_1558_7799'
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
        id='paint1_linear_1558_7799'
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
        id='paint2_linear_1558_7799'
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
