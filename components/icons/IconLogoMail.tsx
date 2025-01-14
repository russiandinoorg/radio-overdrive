import type { ComponentPropsWithRef, FC } from 'react';

export const IconLogoMail: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='none'
    height='58'
    viewBox='0 0 58 58'
    width='58'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#filter0_b_1558_7780)'>
      <circle
        cx='29'
        cy='29'
        fill='url(#paint0_linear_1558_7780)'
        r='28.75'
        stroke='url(#paint1_linear_1558_7780)'
        strokeWidth='0.5'
      />
      <path
        d='M46.4016 38.8811V19.1182C46.4016 18.6624 46.2135 18.2253 45.8789 17.903C45.5442 17.5807 45.0903 17.3997 44.617 17.3997H13.3862C12.9129 17.3997 12.4589 17.5807 12.1243 17.903C11.7896 18.2253 11.6016 18.6624 11.6016 19.1182V38.8811C11.6016 39.3369 11.7896 39.774 12.1243 40.0963C12.4589 40.4186 12.9129 40.5997 13.3862 40.5997H44.617C45.0903 40.5997 45.5442 40.4186 45.8789 40.0963C46.2135 39.774 46.4016 39.3369 46.4016 38.8811Z'
        fill='url(#paint2_linear_1558_7780)'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='0.5'
      />
      <path
        d='M46.4016 20.3003L29.0016 29.0003L11.6016 20.3003'
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
        id='filter0_b_1558_7780'
        width='62'
        x='-2'
        y='-2'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation='1' />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1558_7780' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_backgroundBlur_1558_7780'
          mode='normal'
          result='shape'
        />
      </filter>
      <linearGradient
        gradientUnits='userSpaceOnUse'
        id='paint0_linear_1558_7780'
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
        id='paint1_linear_1558_7780'
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
        id='paint2_linear_1558_7780'
        x1='16.8216'
        x2='50.9623'
        y1='1.01466'
        y2='9.94714'
      >
        <stop stopColor='#9337D4' />
        <stop offset='1' stopColor='#5B31C0' />
      </linearGradient>
    </defs>
  </svg>
);
