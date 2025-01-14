import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  onClick?: () => void;
  loading?: boolean;
  children: ReactNode;
}
