import React, { useState } from "react";
import TodoForm from "./TodoForm";
import todoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1> What is the plan </h1>
      <TodoForm />
    </div>
  );
}

export default TodoList;
