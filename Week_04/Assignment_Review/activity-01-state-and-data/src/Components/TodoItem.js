const TodoItem = ({ todo, handleCheck, handleDelete }) => {
  const handleChecked = (e) => {
    handleCheck(todo.id);
  };

  const deleteTodo = (e) => {
    handleDelete(todo.id);
  };

  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleChecked}
      />
      <p className={todo.completed ? "strikethrough" : ""}> {todo.title} </p>
      <button onClick={deleteTodo}>X</button>
    </li>
  );
};

export default TodoItem;
