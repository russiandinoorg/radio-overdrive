import classnames from 'classnames';
import type { FC } from 'react';

import styles from './buttonRectangle.module.scss';
import type { ButtonProps } from './types';

export const ButtonRectangle: FC<ButtonProps> = ({
  type = 'button',
  disabled,
  loading,
  children,
  className,
  ...props
}) => {
  const classes = classnames(
    styles.button,
    {
      [styles.disabled]: disabled,
      [styles.loading]: loading,
    },
    className,
  );
  return (
    <button className={classes} disabled={loading || disabled} type={type} {...props}>
      <span className={styles.button_text}>{children}</span>
    </button>
  );
};
