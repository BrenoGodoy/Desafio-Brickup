"use client";

import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { edit, del, start, Task } from "@/redux/features/tasks-slice";
import { useAppSelector } from "@/redux/store";
import Link from 'next/link';

export default function TasksTable() {
  const dispatch = useDispatch<AppDispatch>();

  const tasks = useAppSelector((state) => state.taskReducer);

  useEffect(() => {
    console.log('RODOU USEEFFECT')
    dispatch(start());
  }, [dispatch]);

  const handleComplete = (task: Partial<Task>) => {
    const newTask = {
      id: task.id,
      description: task.description,
      status: 'Finalizada'
    }
    dispatch(edit(newTask));
  }

  const handleDelete = (id: number) => {
    dispatch(del({id}));
  }

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <table className="min-w-full bg-white shadow-md rounded my-6">
        <thead>
          <tr>
            <th className="border-b py-2">Descrição</th>
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
                  className="bg-primary-400 text-black px-4 py-2 rounded disabled:bg-primary-100"
                  onClick={(e) => handleComplete({id: task.id, description: task.description, status: task.status})}
                  disabled={task.status === 'Finalizada'}
                >
                  Concluir
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="bg-primary-400 text-black px-4 py-2 rounded"
                  onClick={(e) => handleDelete(task.id)}
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
              <td>
              <Link href={`http://localhost:8080/tasks/${task.id}`}>
                <button
                  type="button"
                  className="bg-primary-400 text-black px-4 py-2 rounded"
                >
                  Imagem
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
