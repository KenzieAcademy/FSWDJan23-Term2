import { TodoItem } from "./index";

const TodoList = ({ todos, handleCheck, handleDelete }) => {
  return (
    <ul className="TodoList">
      {todos &&
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
    </ul>
  );
};

export default TodoList;
