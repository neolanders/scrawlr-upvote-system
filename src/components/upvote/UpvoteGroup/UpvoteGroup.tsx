import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { toggleList, addUpvote } from '@/store/upvoteSlice';
import Button, { ButtonSize } from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import UpvoteList from './UpvoteList';
import styles from './UpvoteGroup.module.scss';

export interface UpvoteGroupProps {
  listId: string;
  size?: 'small' | 'medium' | 'large';
}

const UpvoteGroup: React.FC<UpvoteGroupProps> = ({
  listId,
  size = 'medium',
}) => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.lists[listId]);

  if (!list) {
    return null;
  }

  const handleToggle = () => {
    dispatch(toggleList(listId));
  };

  const handleAdd = () => {
    dispatch(addUpvote(listId));
  };

  return (
    <div className={styles.container}>
      <div 
        className={styles.group}
        role="group"
        aria-label={`Upvote group ${listId}`}
      >
        <UpvoteList
          listId={listId}
          items={list.items}
          selected={list.selected}
          size={size}
          onToggle={handleToggle}
        />
      </div>
      <Button
        onClick={handleAdd}
        size={ButtonSize.Large}
        aria-label={`Add upvote to group ${listId}`}
        className={styles.addButton}
      >
        <Icon name="add" size={size} />
      </Button>
    </div>
  );
};

export default UpvoteGroup; 