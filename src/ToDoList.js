import React from 'react'

export default function ToDoList( {todoList} ) {
    return (
        <>
            <div>
                <h2>TODOS</h2>
                {todoList}
            </div>
        </>
    )
}
