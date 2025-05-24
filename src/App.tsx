import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '@/store/upvoteSlice';
import type { RootState } from '@/store';
import UpvoteGroup from '@/components/upvote/UpvoteGroup/UpvoteGroup';
import Card from '@/components/ui/Card/Card';
import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.lists);

  useEffect(() => {
    // Initialize lists only if they don't exist in the persisted state
    ['list1', 'list2', 'list3'].forEach(listId => {
      if (!lists[listId]) {
        dispatch(addList(listId));
      }
    });
  }, [dispatch, lists]);

  return (
    <Card>
      <div className={styles.lists}>
        <UpvoteGroup listId="list1" />
        <UpvoteGroup listId="list2" />
        <UpvoteGroup listId="list3" />
      </div>
    </Card>
  );
}

export default App;
