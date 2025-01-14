import type { ComponentPropsWithRef, FC } from 'react';

export const IconArrowPrev: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg height='19' viewBox='0 0 19 19' width='19' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M10.4844 17.9707L1.99909 9.48542L10.4844 1.00014' strokeWidth='2' />
    <path d='M1.99909 9.48542H18.9697' strokeWidth='2' />
  </svg>
);
