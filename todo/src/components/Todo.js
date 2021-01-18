import React from 'react';

const Todo = props => {

    const handleClick = () => {
        props.handleTodoToggle(props.todo.id);
    }

    return(
        <div className="todo-container">
            <div className="todo-list" onClick={handleClick} className={`task${props.todo.completed ? ' completed' : ''}`}>
                <p className="todo">{props.todo.task}</p>
            </div>
        </div>
    )
}

export default Todo;