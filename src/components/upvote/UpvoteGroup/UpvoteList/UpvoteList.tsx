import Upvote from './Upvote';
import styles from './UpvoteList.module.scss';

type UpvoteListProps = {
  listId: string;
  items: number;
  selected: boolean;
  onToggle: () => void;
};

const UpvoteList = ({
  listId,
  items,
  selected,
  onToggle,
}: UpvoteListProps): React.JSX.Element => {
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