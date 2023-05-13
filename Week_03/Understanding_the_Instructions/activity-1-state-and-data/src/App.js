import { useState } from "react";
import { AddTodo, TodoList } from "./Components/index";
import todoList from "./todoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(todoList);

  /**
   * When defining the handleAdd function and determening the
   * new item's id, DO NOT use the index.
   *
   * Easiest method: find the largest id and add 1
   * Alternative methods:
   *  - uuid generation
   *  - store the current max ID in state, and use that + 1
   *    - remember to update the max ID in state after setting a new one
   *
   */

  return (
    <div className="App">
      <h1>Todo List:</h1>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
