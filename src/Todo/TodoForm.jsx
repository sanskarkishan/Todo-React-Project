import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handlerInputChange = (value) => {
    setInputValue({id:value, content:value, checked:false});
  };

  const handlerFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id:"", content:"", checked:false});
  };
  return (
    <section className="form">
      <form onSubmit={handlerFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handlerInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
