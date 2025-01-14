import type { ComponentPropsWithRef, FC } from 'react';

export const IconEllipse: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='none'
    height='20'
    viewBox='0 0 20 20'
    width='20'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='10' cy='10' r='9.25' stroke='white' strokeWidth='1.5' />
  </svg>
);
