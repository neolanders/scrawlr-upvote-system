import React from 'react';
import Upvote from './Upvote';
import styles from './UpvoteList.module.scss';

export interface UpvoteListProps {
  listId: string;
  items: number;
  selected: boolean;
  onToggle: () => void;
}

const UpvoteList: React.FC<UpvoteListProps> = ({
  listId,
  items,
  selected,
  onToggle,
}) => {
  return (
    <div 
      className={styles.upvotes}
      role="list"
      aria-label="Upvotes"
    >
      {Array.from({ length: items }).map((_, index) => (
        <Upvote
          key={`${listId}-${index}`}
          id={`${listId}-${index}`}
          selected={selected}
          onClick={onToggle}
        />
      ))}
    </div>
  );
};

export default UpvoteList; 