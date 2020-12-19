import React from "react";

export default function AddTodo({
  inputs,
  handleChange,
  handleClick
}) /*props*/ {
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
