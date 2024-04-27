import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo";
import { loggerMiddleware, myselfMiddleware } from "./middleware";
import { todoApiServices } from "./services/todoApi";

const reducers = combineReducers({
  todoReducer,
  [todoApiServices.reducerPath]: todoApiServices.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loggerMiddleware)
      .concat(myselfMiddleware)
      .concat(todoApiServices.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
