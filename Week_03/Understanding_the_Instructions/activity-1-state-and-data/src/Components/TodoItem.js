const TodoItem = ({ todo }) => {
  const handleChecked = (e) => {
    console.log(e.target.checked);
  };

  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        value={todo.completed}
        onChange={(e) => handleChecked(e)}
      />
      <p> {todo.title} </p>
      <button>X</button>
    </li>
  );
};

export default TodoItem;
