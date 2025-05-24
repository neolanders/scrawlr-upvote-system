import React from 'react';
import Icon from '@/components/ui/Icon';
import Button, { ButtonSize } from '@/components/ui/Button';
import styles from './Upvote.module.scss';

// Variables
const DEFAULT_ARROW = '#343A40';
const SELECTED_ARROW = '#253CF2';

export interface UpvoteProps {
  selected: boolean;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  id: string;
}

const Upvote: React.FC<UpvoteProps> = ({
  selected,
  onClick,
  size = 'medium',
  id,
}) => {
  return (
    <Button
      onClick={onClick}
      size={ButtonSize.Large}
      aria-pressed={selected}
      aria-label={selected ? 'Remove upvote' : 'Add upvote'}
      data-testid={`upvote-${id}`}
      className={`${styles.upvote} ${selected ? styles.selected : ''}`}
    >
      <Icon 
        name="arrow" 
        size={size} 
        color={selected ? SELECTED_ARROW : DEFAULT_ARROW}
      />
    </Button>
  );
};

export default Upvote; 