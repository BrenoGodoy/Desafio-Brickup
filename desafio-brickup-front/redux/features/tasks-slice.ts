import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: TasksState;
}

type TasksState = {
  name: string,
  status: string
}

const initialState = {
  value: {
    name: "",
    status: "",
  } as TasksState
} as InitialState

export const tasks = createSlice({
  name: "task",
  initialState,
  reducers: {
    del: () => {
      return initialState;
    },
    add: (state, action: PayloadAction<string>) => {
      return {
        value: {
          name: action.payload,
          status: "Ok"
        }
      }
    }
  }
});

export const { add, del } = tasks.actions;
export default tasks.reducer;