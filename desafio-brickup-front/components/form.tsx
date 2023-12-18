"use client";

import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/redux/features/tasks-slice";

export default function Form() {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const onClickTest = () => {
    dispatch(add(text));
  }

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={onClickTest}>CRIAR TEXTO</button>
    </>
  )
}
