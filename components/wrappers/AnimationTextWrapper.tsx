'use client';

import type { FC, ReactNode } from 'react';
import { useRef } from 'react';

import { UseTextColoredAnimation, UseTextOpacityAnimation, UseDynamicImgAnimation } from '@/utils';

interface AnimationTextWrapperProps {
  children: ReactNode;
}

export const AnimationTextWrapper: FC<AnimationTextWrapperProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  UseTextColoredAnimation(ref);
  UseTextOpacityAnimation(ref);
  UseDynamicImgAnimation(ref);

  return <div ref={ref}>{children}</div>;
};
