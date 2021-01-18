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

    //toggles item on and off
    // handleTodoToggle = (todoId) => {
    //     dispatch(initialState.map(todo => {
    //         if(todo.id === todoId){
    //             return{
    //                 ...todo, completed: !todo.completed
    //             }
    //         }
    //         return (todo)
    //     })
    // )
    // }

    // handleTodoAdd = () => {

    // }

    // updateText=

    // handleTodoCompleted

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
            {/* <TodoForm handleTodoAdd={this.handleTodoAdd} updateText={this.updateText}/>
            <TodoList initialState={initialState} handleTodoToggle={state.handleTodoToggle} handleTodoCompleted={this.handleTodoCompleted}/> */}
        </div>
    )
}
export default AddTodo;

  // const [addItem, setAddItem] = useState('Clean Bathrooms');
  // const [addId, SetAddId] = useState(Math.random() * Date.now());
  // const [itemComplete, setItemComplete] = useState(false);
    // const [itemToggle, setItemToggle] = useState(false);
      // const [itemClear, setItemClear] = useState('');

      // let currentState = reducer(initialState, addAction('Clean toliets'))
// console.log(currentState);

// currentState = reducer(initialState, idAction())
// console.log(currentState);

// currentState = reducer(initialState, completeAction(true))
// console.log(currentState);

// currentState = reducer(initialState, toggleAction(true))
// console.log(currentState);

// currentState = reducer(initialState, clearAction())
// console.log(currentState);

{/* <form>
                <input type="text" className="input" name="addItem" onChange={handleChanges}/>
                <button type="submit">Add Todo</button> */}