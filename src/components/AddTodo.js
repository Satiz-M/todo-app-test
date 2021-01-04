import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [inputs, setInputs] = useState("");

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const handleClick = () => {
    if (!inputs) return;
    addTodo(inputs);
    setInputs("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputs}
        placeholder="add your add todo's"
        onChange={handleChange}
      ></input>
      <button type="submit" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
