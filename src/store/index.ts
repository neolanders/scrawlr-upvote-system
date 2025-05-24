import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import upvoteReducer from './upvoteSlice';

const persistConfig = {
  key: 'upvote-root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, upvoteReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Update RootState to properly handle persisted state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 