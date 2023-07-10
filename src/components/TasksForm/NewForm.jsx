import React from "react";
import "../TasksForm/TaskForm.css"

const NewForm = ({ value, updateText, handleAction }) => {
    return (

            <label className="newForm">
                <input
                    className="newForm__input"
                    placeholder="Новая задача"
                    value={value}
                    onChange={(e) => updateText(e.target.value)}
                />
                <button
                    className="newForm__button"
                    type="submit"
                    onClick={handleAction}>Добавить
                    </button>
            </label>

    );
};

export default NewForm;