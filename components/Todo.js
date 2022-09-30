import React from 'react'
import styles from '../styles/Home.module.css'

export default function Todo({todo}) {
  return (
    <div className={styles.profils_detail}>
      <div className={styles.profils_detail__left}>
        {
          todo.fields.Image.map(function(each){
          return(<img src={each.url}/>)
          })
        }
      </div>
      <div className={styles.profils_detail__right}>
        <h2>{todo.fields.Name}</h2>
        <strong>{todo.fields.Phone}</strong>
        <p>{todo.fields.Description}</p>
      </div>
    </div>
  )
}
