import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todolist from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    setTodos([todos, ...todos]);
    setTodos("");
  };

  return (
    <div>
      <h1>My todo's</h1>
      <AddTodo handleClick={handleClick} />
      {todos.map((todo, idx) => (
        <Todolist todo={todo} />
      ))}
    </div>
  );
}
