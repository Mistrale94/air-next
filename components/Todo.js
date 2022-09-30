import React from 'react'

export default function Todo({todo}) {
  return (
    <div>
        <h2>{todo.fields.Name}</h2>
        <strong>{todo.fields.Phone}</strong>
        <p>{todo.fields.Description}</p>
    </div>
  )
}
