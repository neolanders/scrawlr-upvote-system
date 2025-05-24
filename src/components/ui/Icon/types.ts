export enum IconSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}


export interface IconProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
} 