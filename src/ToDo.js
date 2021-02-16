import React from 'react'

export default function ToDo( {todo}) {
    return (
        <div>
            <h3>TODOS</h3>
            <input type="checkbox" checked="{todo.complete}"/>
            <label>
                {todo.name}
            </label>
        </div>
    )
}
