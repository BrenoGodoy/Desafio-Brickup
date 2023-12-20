import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: number;
  description: string;
  status: string;
}

type TasksState = Task[];

const initialState: TasksState = []

export const tasks = createSlice({
  name: "task",
  initialState,
  reducers: {
    start: () => {},
    startSucess: (state, action: PayloadAction<TasksState>) => {
      return action.payload;
    },
    add: (state, action: PayloadAction<Partial <Task>>) => {},
    addSucess: (state, action: PayloadAction<TasksState>) => {
      return action.payload;
    },
    edit: (state, action: PayloadAction<Task>) => {},
    editSucess: (state, action: PayloadAction<TasksState>) => {
      return action.payload;
    },
    del: (state, action: PayloadAction<Partial <Task>>) => {},
    delSucess: (state, action: PayloadAction<TasksState>) => {
      return action.payload;
    }
  }
});

export const { add, start, del, delSucess, addSucess, startSucess, edit, editSucess } = tasks.actions;
export default tasks.reducer;