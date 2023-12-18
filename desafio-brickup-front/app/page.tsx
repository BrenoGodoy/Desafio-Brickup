"use client";
import TasksTable from "@/components/TasksTable";
import { useAppSelector } from "@/redux/store";

export default function Home() {

  const text = useAppSelector((state) => state.taskReducer);

  return (
    <main>
      <TasksTable />
    </main>
  )
}
