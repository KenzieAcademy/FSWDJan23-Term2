import { TodoItem } from "./index";

const TodoList = ({ todos }) => {
  return (
    <ul className="TodoList">
      {
        todos && todos.map((todo, index) => 
          <TodoItem todo={todo} key={index} />
        )
      }
    </ul>
  );
};

export default TodoList;
