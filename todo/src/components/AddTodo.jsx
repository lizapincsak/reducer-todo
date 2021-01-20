import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers/index';
// import TodoList from './TodoList';
// import TodoForm from './TodoForm';
import { addAction, idAction, completeAction, toggleAction, clearAction } from '../actions/index';

let currentState = reducer(initialState, addAction('Clean toliets'))
console.log(currentState);

currentState = reducer(initialState, idAction())
console.log(currentState);

currentState = reducer(initialState, completeAction(true))
console.log(currentState);

currentState = reducer(initialState, toggleAction(true))
console.log(currentState);

currentState = reducer(initialState, clearAction())
console.log(currentState);

const AddTodo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)

    console.log("currentState: ", state)
    return(
        <div>
             <h2>These are the items on my Todo List</h2>
            <form>
                <input type="text" className="input" name="addItem" value={state.addItem}/>
                <button type="submit" onClick={() => {
              dispatch(addAction(state.addItem));
              dispatch(clearAction(true));
            }}>Add Todo</button>
            </form>
        </div>    )
}
export default AddTodo;

  