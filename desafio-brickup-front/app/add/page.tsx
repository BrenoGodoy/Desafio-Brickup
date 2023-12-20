'use client';
import { useState} from "react";
import { add } from "@/redux/features/tasks-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function AddTask() {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pendente');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    dispatch(add({description, status}));

    router.push('/');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Adicionar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Descrição:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-600">
            Status:
          </label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="Pendente">Pendente</option>
            <option value="Finalizada">Finalizada</option>
          </select>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}