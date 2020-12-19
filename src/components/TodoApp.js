import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todolist from "./TodoList";

export default function Todo() {
  const [inputs, setInputs] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const handleClick = () => {
    let todo = todos;
    const newtodo = [todo, ...todos];
    setTodos(newtodo);
    setInputs("");
    console.log(todo);
  };

  return (
    <div>
      <h1>My todo's</h1>
      <AddTodo
        inputs={inputs}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      {todos.map((todo, index) => (
        <Todolist todo={todo} key={index} />
      ))}
    </div>
  );
}
