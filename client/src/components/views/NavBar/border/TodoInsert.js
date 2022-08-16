import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function TodoInsert({ onInsertToggle, onInsertTodo }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  }
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form className="todoForm" onSubmit={onSubmit}>
        <input
          placeholder="please type"
          value={value}
          onChange={onChange}
        ></input>
        <button type="submit" style={{background:"#fff", border:"none", marginTop:"20px"}}>
          <AiOutlinePlusCircle />
        </button>
      </form>
    </div>
  );
}

export default TodoInsert;
