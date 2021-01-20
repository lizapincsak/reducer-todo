import React from 'react';

const Todo = props => {
    const {todo, handleToggleCompleted} = props;
    const handleClick = () => {
        handleToggleCompleted(todo.id);
        
    }
    console.log(todo.completed);
    return(<li onClick={handleClick} className={todo.completed ? "completed": ""}>{todo.title}</li>
    )
}

export default Todo;