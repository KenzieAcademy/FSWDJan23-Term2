import { useState } from "react";
import { AddTodo, TodoList } from "./Components/index";
import todoList from "./todoList";
import "./App.css";
import { findMax } from "./utils/findMax";

function App() {
  const [todos, setTodos] = useState(todoList);

  /**
   * Adds a new ToDo item to the existing ToDo list
   * @param {string} title - Title of our new ToDo item
   */
  const handleAdd = (title) => {
    const newTodo = {
      id: findMax(todos.map((todo) => todo.id)) + 1,
      title,
      completed: false,
    };

    setTodos((t) => [...t, newTodo]);
  };

  /**
   * Removes the deleted ToDo item from the list,
   * updating state in the process.
   * @param {number} id
   */
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /**
   * Finds the todo item with matching id
   * and sets its completed value to true.
   * Then state is updated.
   * @param {number} id
   */
  const handleCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <h1>Todo List:</h1>
      <AddTodo handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
