import React, { useState } from "react";

export default function AddTodo({ handleClick }) {
  /*props*/
  const [inputs, setInputs] = useState("");

  const handleChange = (e) => {
    setInputs(e.target.value);
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
