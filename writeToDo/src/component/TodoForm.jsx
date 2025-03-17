import React, { useState } from "react";
import { useTodo } from "../contexts/Todo";

export default function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type=" text"
        className="w-full vorder border-black/10 rounded-l-lg 
    px-3 outline-none duration-150 bg-gray-200 py-1.5 text-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600
      text-white shrink-0"
      >
        ADD
      </button>
    </form>
  );
}
