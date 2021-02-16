import React from 'react';
import ToDo from './ToDo';

export default function ToDoList( {todoList, toggleToDo} ) {
    return (
        todoList.map(todo =>{
            return <ToDo key={todo.id} toggleToDo={toggleToDo} todo={todo} />
        })
    );
}
