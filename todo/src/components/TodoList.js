import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    
    const handleClick = () => {
        props.handleTodoCompleted();
    }

    return(
        <div className="completed-container">
            {props.todo.map(td => (
                <Todo handleTodoToggle={props.handleTodoToggle} key={td.id} todo={td}/>
            ))}
            <button onClick={handleClick} className="complete-btn">Clear List</button>
        </div>
    )
}

export default TodoList;
