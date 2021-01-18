import React from 'react';
import reducer, {initialState } from '../reducers/index';
import AddTodo from './AddTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <AddTodo />
      </header>
    </div>
  );
}

export default App;
