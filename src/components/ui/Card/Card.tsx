import { ReactNode } from 'react';
import styles from './Card.module.scss';

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps): React.JSX.Element => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      {children}
    </div>
  );
};

export default Card; 