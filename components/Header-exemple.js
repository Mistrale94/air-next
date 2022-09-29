import React from 'react'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
        <nav>
          <a href="#">Home</a>
          <a href="#">Works</a>
          <a href="#">Contact</a>
        </nav>
    </div>
  )
}
