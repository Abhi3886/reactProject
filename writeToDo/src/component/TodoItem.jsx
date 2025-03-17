import React, { useState } from "react";
import { useTodo } from "../contexts/Context";

export default function TodoItem({ todo }) {
  const [isEditable, setEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { deleteTodo, toggleComplete, updateTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg 
        px-3 py-1.5 gap-x-3 shadow-sm shadow-white/20 text-black
        duration-300 ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"} `}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      <input
        type="text"
        className={` border outline-none w-full
          bg-transparent rounded-lg ${
            isEditable ? "border-balck/10 px-2 " : "border-transparent"
          } `}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm
        border border-black/10 justify-center items-center
        bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 px-2"
        onClick={() => {
          if (todo.completed) return;
          if (isEditable) {
            editTodo();
          } else {
            setEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isEditable ? "Save" : "Edit"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm
        border border-black/10 justify center items-center
        bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 px-2"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}
