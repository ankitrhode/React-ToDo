import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { index: "", title: "", isCompleted: false },
  ]);

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          index: doc.id,
          title: doc.data().title,
          isCompleted: doc.data().isCompleted,
        }))
      );
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      title: input,
      isCompleted: false,
    });

    setInput("");
  };

  return (
    <div className="app">
      <form className="app__form">
        <h1>ToDo</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button disabled={!input} type="submit" onClick={addTodo}>
          Add todo
        </button>
      </form>

      {todos.map((todo) => (
        <Todo
          index={todo.index}
          title={todo.title}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
}

export default App;
