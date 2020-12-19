import React from "react";

export default function Todolist({ todo, key }) {
  return (
    <div>
      <p key={key}>{todo}</p>
    </div>
  );
}
