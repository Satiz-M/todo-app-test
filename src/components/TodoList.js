import React from "react";

export default function Todolist({ todo }) {
  return (
    <div>
      <p>{todo.text}</p>
    </div>
  );
}
