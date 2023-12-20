'use client';
import { useState} from "react";
import { edit } from "@/redux/features/tasks-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter as navegationRouter } from "next/navigation";
import { useRouter } from 'next/router';

export default function EditTask() {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pendente');
  const dispatch = useDispatch<AppDispatch>();
  const navRouter = navegationRouter();
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    dispatch(edit({id: parseInt(id as string), description, status}));

    navRouter.push('/');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Editar Tarefa</h1>
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
            <option value="pendente">Pendente</option>
            <option value="finalizada">Finalizada</option>
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