import reactDom from "react-dom";
import React, { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [todos, setToDos ] = useState(['todo1', 'todo2']);
  return (
    <>
      <h1>My TO DO App</h1>
      <input type="text" />
      <button>Add todo</button>
      <ToDoList todoList={todos} />
    </>
  );
}

export default App;
