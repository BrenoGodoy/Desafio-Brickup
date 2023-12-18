"use client";

import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add, start } from "@/redux/features/tasks-slice";
import { useAppSelector } from "@/redux/store";

export default function TasksTable() {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const tasks = useAppSelector((state) => state.taskReducer);

  useEffect(() => {
    dispatch(start());
  }, [dispatch, text]);

  const onClickTest = () => {
    dispatch(add());
  };

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <table className="min-w-full bg-white shadow-md rounded my-6">
        <thead>
          <tr>
            <th className="border-b py-2">Name</th>
            <th className="border-b py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b">
              <td className="py-2">{task.name}</td>
              <td className="py-2">{task.status}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="py-2">
              <button
                type="button"
                onClick={onClickTest}
                className="bg-primary-500 text-black px-4 py-2 rounded"
              >
                Concluir
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
