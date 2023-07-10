import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from '../../store/todoSlice'
import "../TasksForm/TaskForm.css"

const TodoItem = ({ text, completed, id }) => {
    const dispatch = useDispatch();
    return (
        <li className="todoItems">
            <input
                className="todoItem__box"
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleComplete({ id }))}
            />
            <p className="todoItem__text">{text}</p>
            <span
                className="todoItem__mark"
                onClick={() => dispatch(removeTodo({ id }))}
            >X</span>
        </li>
    );
};

export default TodoItem;