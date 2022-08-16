import React from "react";
import { AiFillCheckSquare, AiOutlineBorder } from "react-icons/ai";
import "../../../../css/landing.css";

function todoitem({ todo, onCheckToggle }) {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <AiFillCheckSquare
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <AiOutlineBorder
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div className="text">{text}</div>
      </div>
    </div>
  );
}
export default todoitem;
