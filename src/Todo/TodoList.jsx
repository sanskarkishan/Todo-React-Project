import { FiCheckCircle } from "react-icons/fi"
import { MdDeleteForever } from "react-icons/md"
import { TodoDateTime } from "./TodoDateTime"

export const TodoList = ({data, checked, onHandleDeleteTodo, onHandleCheckTodo}) => {
    return (
        <li className="todo-item">
            <span className={checked? "checkList" : "notCheckList"} >{data}</span>
            <button className="check-btn" onClick={() => onHandleCheckTodo(data)}
                
                style={{color: checked? "green" : "red"}}>
                

                <FiCheckCircle />
            </button>
            <button
                className="delete-btn"
                onClick={() => onHandleDeleteTodo(data)}
            >
                <MdDeleteForever />
            </button>
            {/* <TodoDateTime /> */}
        </li>
    )
}