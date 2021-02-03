import React, { useState } from "react";
import TodoForm from "./TodoForm";
import todoForm from "./TodoForm";

/* Function component that will represent the list and hold the 
    other two components (TodoForm) and (Todo).*/
function TodoList() {
  const [todos, setTodos] = useState([]);

  // function in charge of checking input (clean out spaces)
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // Set Todos
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  //
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1> What is the plan </h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todo} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoList;
