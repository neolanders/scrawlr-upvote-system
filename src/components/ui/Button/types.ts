export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
  'aria-pressed'?: boolean;
  'data-testid'?: string;
}; 