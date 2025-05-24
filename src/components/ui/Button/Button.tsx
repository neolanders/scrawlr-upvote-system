import React from 'react';
import styles from './Button.module.scss';
import type { ButtonProps } from './types';
import { ButtonSize } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = ButtonSize.Medium,
  disabled = false,
  className = '',
  'aria-label': ariaLabel,
  'aria-pressed': ariaPressed,
  'data-testid': dataTestId,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[size]} ${className}`}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button; 