import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar";
import Header2 from "../../Header/header2";
import Todo from "./todo";
import TodoInsert from "./TodoInsert";
import "../../../../css/border.css";
import { AiOutlinePlus } from "react-icons/ai";

let nextId = 4;

function Border() {
  const [insertToggle, setInsertToggle] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "test 1",
      checked: true,
    },
    {
      id: 2,
      text: "test 2",
      checked: false,
    },
    {
      id: 3,
      text: "test 3",
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("null");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <div className="center">
      <NavBar></NavBar>
      <Header2></Header2>

      <div className="mainPage">
        <h1>
          <p>border page</p>
        </h1>
      </div>

      <div className="maingPage2">
        <div className="main2Content" style={{width:"100%"}}>
          <div className="Template">
            <h2>title</h2>
            <br />
            <Todo todos={todos} onCheckToggle={onCheckToggle} />
            <div className="add-todo-button" onClick={onInsertToggle}>
              <AiOutlinePlus style={{marginLeft:"190px"}}/>
            </div>
            {insertToggle && (
              <TodoInsert
                onInsertToggle={onInsertToggle}
                onInsertTodo={onInsertTodo}
              />
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Border;
