"use client";
import Form from "@/components/form";
import { useAppSelector } from "@/redux/store";

export default function Home() {

  const text = useAppSelector((state) => state.taskReducer.value.name);

  return (
    <main>
      <Form />
      <h1>text: {text} </h1>
    </main>
  )
}
