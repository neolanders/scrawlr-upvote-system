export enum IconSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export type IconProps = {
  name: string;
  size?: IconSize;
  color?: string;
}; 