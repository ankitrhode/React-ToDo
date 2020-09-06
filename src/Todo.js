import React from "react";
import "./Todo.css";
import db from "./firebase";

function Todo({ title, index, isCompleted }) {
  const completeTodo = (e) => {
    e.preventDefault();
    db.collection("todos").doc(index).update({
      isCompleted: true,
    });
  };
  const deleteTodo = (e) => {
    e.preventDefault();
    db.collection("todos").doc(index).delete();
  };
  return (
    <div className="todo">
      <h1 style={{ textDecoration: isCompleted ? "line-through" : "" }}>
        {title}
      </h1>
      <div className="todo__buttons">
        <button className="todo__button1" onClick={completeTodo}>
          Complete
        </button>
        <button className="todo__button2" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
