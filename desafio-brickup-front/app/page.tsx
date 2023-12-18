"use client";
import Form from "@/components/form";
import { useAppSelector } from "@/redux/store";

export default function Home() {

  const text = useAppSelector((state) => state.taskReducer);

  return (
    <main>
      <Form />
      <h1>text: {text.map((e) => {
        return <div key={e.id}>{e.name}</div>
      })} </h1>
    </main>
  )
}
