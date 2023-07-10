import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice"
import NewForm from "../TasksForm/NewForm";
import TodoList from "../TasksForm/TodoList";
import "../Tasks/Tasks.css"

const Tasks = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAction = () => {
        if (text.trim().length) {
            dispatch(addTodo({ text }));
            setText('');
        }
    }
    return (
        <div className="tasks__wrapper">
            <div className="tasks">
                <NewForm
                    value={text}
                    updateText={setText}
                    handleAction={handleAction}
                />
                <TodoList />
            </div>
        </div>
    );
};

export default Tasks;