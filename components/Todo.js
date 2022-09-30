import React from 'react'
import Image from 'next/image'

export default function Todo({todo}) {
  return (
    <div>
        <img src={todo.fields.Image[0].url} alt={todo.fields.Image[0].url} />
        <h2>{todo.fields.Name}</h2>
        <strong>{todo.fields.Phone}</strong>
        <p>{todo.fields.Description}</p>
    </div>
  )
}
