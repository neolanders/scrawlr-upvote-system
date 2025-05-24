import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UpvoteState {
  lists: {
    [key: string]: {
      items: number;
      selected: boolean;
    };
  };
}

const initialState: UpvoteState = {
  lists: {},
};

export const upvoteSlice = createSlice({
  name: 'upvotes',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      if (!state.lists[action.payload]) {
        state.lists[action.payload] = {
          items: 0,
          selected: false,
        };
      }
    },
    toggleList: (state, action: PayloadAction<string>) => {
      if (state.lists[action.payload]) {
        state.lists[action.payload].selected = !state.lists[action.payload].selected;
      }
    },
    addUpvote: (state, action: PayloadAction<string>) => {
      if (state.lists[action.payload]) {
        state.lists[action.payload].items += 1;
      }
    },
  },
});

export const { addList, toggleList, addUpvote } = upvoteSlice.actions;
export default upvoteSlice.reducer; 