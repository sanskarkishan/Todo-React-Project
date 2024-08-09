import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./Tododate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";


export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handlerFormSubmit = (inputValue) => {
    const {id, content, checked} = inputValue;
    if (!content) return;
    // if (task.includes(inputValue)) {
    //   alert("Task is added");
    //   return;
    // }
    const ifTodoContentMached = task.find((curTask) => curTask.content === content);
    if (ifTodoContentMached) {
      alert("Task is added already");
      return;
    }
    setTask((prevTask) => [...prevTask, {id:id, content:content, checked:checked}]);
  };

  setLocalStorageTodoData(task);

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content != value);
    setTask(updatedTask);
  };

  const handleClearAllBtn = () => {
    setTask([]);
  };

  const handleCheckTodo = (content) =>{
    const updatedTask = task.map((curTask) => {
      if(curTask.content === content){
        return{...curTask, checked: !curTask.checked}
      } else {
        return curTask;
      }
    })
    setTask(updatedTask);
  }

  

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handlerFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((currTask) => {
            return (
              <TodoList
                Key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckTodo ={handleCheckTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearAllBtn}>
          Clear All
        </button>
      </section>
    </section>
  );
};
