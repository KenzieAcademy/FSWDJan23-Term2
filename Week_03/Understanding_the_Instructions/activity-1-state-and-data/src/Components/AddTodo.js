import { useState } from "react";

const initialState = {
  title: "",
};

const AddTodo = (props) => {
  const [newTodo, setNewTodo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(e.target.value);
  };

  const handleInput = (e) => {
    setNewTodo({ title: e.target.value });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label for="add">
        Add a Todo:
        <input
          name="add"
          type="text"
          placeholder="Add a task ..."
          value={newTodo.title}
          onChange={(e) => handleInput(e)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
