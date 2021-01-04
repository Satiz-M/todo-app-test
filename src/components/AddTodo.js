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
        value={inputs} //props.inputs
        placeholder="add your add todo's"
        onChange={handleChange} //props.handleChange
      ></input>
      <button type="submit" onClick={handleClick} /*props.handleClick*/>
        Add
      </button>
    </div>
  );
}
