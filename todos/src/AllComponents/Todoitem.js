import React from 'react'


export default function Todoitem({ todo, onDelete }) {
  return (
    <>
      <div>
        <h4>{todo.s_no}</h4>
        <p>{todo.todo_title}</p>
        <p>{todo.todo_desc}</p>
        <button className='btn btn-sm btn-danger' onClick={() => { onDelete(todo) }}>
          Delete
        </button>
        <hr />
      </div>
    </>
  )
  }