import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todolist from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [{ text }, ...todos];
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>My todo's</h1>
      <AddTodo addTodo={addTodo} />

      {todos.map((todo, index) => (
        <Todolist todo={todo} key={index} />
      ))}
    </div>
  );
}
