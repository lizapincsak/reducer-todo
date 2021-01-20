import { useReducer } from 'react';
import reducer, {initialState } from '../reducers/index';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { addTodo, clearCompleted, toggleCompleted } from '../actions/index';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleAddTodo = (title) =>{
    dispatch(addTodo(title));
 }

 const handleToggleCompleted = id => {
   dispatch(toggleCompleted(id))
 }
 
 const handleClearCompleted = () => {
   dispatch(clearCompleted())
 }
  return (
    <div className="App">
        <h1>Todo App</h1>
        <button onClick={handleClearCompleted}>test button</button>
       <TodoList todos={state.todos} handleToggleCompleted={handleToggleCompleted}/>
       <TodoForm handleAddTodo={handleAddTodo}/>
    </div>
  );
}

export default App;
