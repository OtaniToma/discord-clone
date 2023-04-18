import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import channelReducer from '../features/channelSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    channel: channelReducer
  }
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;