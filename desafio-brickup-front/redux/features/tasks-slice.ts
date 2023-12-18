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
    del: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    add: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: state.length + 1, // Simplesmente incrementando o id por enquanto
        name: action.payload,
        status: "Ok",
      };
      return [...state, newTask];
    }
  }
});

export const { add, del } = tasks.actions;
export default tasks.reducer;