import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks-slice"

export const store = configureStore({
  reducer: {
    taskReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;