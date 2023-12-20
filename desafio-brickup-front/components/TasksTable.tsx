"use client";

import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add, del, start } from "@/redux/features/tasks-slice";
import { useAppSelector } from "@/redux/store";
import Link from 'next/link';

export default function TasksTable() {
  const dispatch = useDispatch<AppDispatch>();

  const tasks = useAppSelector((state) => state.taskReducer);

  useEffect(() => {
    dispatch(start());
  }, [dispatch]);

  const handleClick = (id: number) => {
    dispatch(del({id}));
  }

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <table className="min-w-full bg-white shadow-md rounded my-6">
        <thead>
          <tr>
            <th className="border-b py-2">Name</th>
            <th className="border-b py-2">Status</th>
            <th className="border-b py-2"></th>
            <th className="border-b py-2"></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b">
              <td className="py-2">{task.description}</td>
              <td className="py-2">{task.status}</td>
              <td className="py-2">
                <button
                  type="button"
                  className="bg-primary-400 text-black px-4 py-2 rounded"
                >
                  Concluir
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="bg-primary-400 text-black px-4 py-2 rounded"
                  onClick={(e) => handleClick(task.id)}
                >
                  Excluir
                </button>
              </td>
              <td>
              <Link href="/edit" as={`/edit?id=${task.id}`}>
                <button
                  type="button"
                  className="bg-primary-400 text-black px-4 py-2 rounded"
                >
                  Editar
                </button>
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="py-2">
              <Link href="/add">
                <button
                  type="button"
                  className="bg-primary-400 text-black px-4 py-2 rounded"
                >
                  Nova Tarefa
                </button>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
