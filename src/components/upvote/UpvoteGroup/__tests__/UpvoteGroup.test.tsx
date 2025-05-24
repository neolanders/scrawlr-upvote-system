import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UpvoteGroup from '../UpvoteGroup';
import upvoteReducer from '../../../../store/upvoteSlice';

// Mock the Icon component
jest.mock('../../../../components/ui/Icon/Icon', () => ({
  __esModule: true,
  default: ({ name }: { name: string }) => (
    <svg data-testid={`icon-${name}`}>
      <path d={name === 'arrow' ? 'M0 0h24v24H0z' : 'M0 0h24v24H0z'} />
    </svg>
  )
}));

describe('UpvoteGroup', () => {
  const mockStore = configureStore({
    reducer: upvoteReducer,
    preloadedState: {
      lists: {
        'test-list': {
          items: 1,
          selected: false
        }
      }
    }
  });

  it('should toggle selection state when clicked', () => {
    render(
      <Provider store={mockStore}>
        <UpvoteGroup listId="test-list" />
      </Provider>
    );

    // Initial state
    expect(mockStore.getState().lists['test-list'].selected).toBe(false);
    
    // Click to select
    const upvote = screen.getByTestId('upvote-test-list-0');
    fireEvent.click(upvote);
    expect(mockStore.getState().lists['test-list'].selected).toBe(true);
    
    // Click to deselect
    fireEvent.click(upvote);
    expect(mockStore.getState().lists['test-list'].selected).toBe(false);
  });
});