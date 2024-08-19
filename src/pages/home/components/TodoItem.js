import React from 'react';  

export default function TodoItem({title, description, completed, onToggleCompleted}) {
    let descriptionText = (!description) ? 'default text': description;
    let completedText = (completed === true) ? 'Completed' : 'Not Completed';
    let completedClass = (completed) ? "success" : "danger";
    let buttonClass = `btn btn-${completedClass}`;

    return (
        <div className="todo-item p-3 mt-4 mb-4 d-flex justify-content-between rounded">
            <div>
                <h5>{title}</h5>
                <p>{descriptionText}</p>
            </div>
        
            <button 
                className={buttonClass}
                onClick={() => onToggleCompleted()}
                >{completedText}</button>
        </div>
    );
}