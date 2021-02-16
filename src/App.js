import reactDom from "react-dom";
import React, { useState, useRef } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [todos, setToDos ] = useState([]);
  const toDoNameRef = useRef();

  function handleAddToDo(e){
    const name = toDoNameRef.current.value;
    if(name ==='') return;
    setToDos(prevToDos => {
      return [...prevToDos, {id:1, name:name, complete:false}]
    });
    toDoNameRef.current.value = null;
  };

  return (
    <>
      <h1>My TO DO App</h1>
      <input ref={toDoNameRef} type="text" />
      <button onClick={handleAddToDo}>Add todo</button>
      <ToDoList todoList={todos} />
    </>
  );
}

export default App;
