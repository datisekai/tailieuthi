import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice";
import AuthSlice from "./slice/AuthSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    Auth: AuthSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
