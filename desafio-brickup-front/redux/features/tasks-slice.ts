import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: number;
  name: string;
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
    del: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    add: (state, action: PayloadAction<Partial <Task>>) => {},
    addSucess: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: state.length + 1,
        name: action.payload,
        status: "Ok",
      };
      return [...state, newTask];
    }
  }
});

export const { add, start, del, addSucess, startSucess } = tasks.actions;
export default tasks.reducer;