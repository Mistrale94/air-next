import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
        <h1>Header</h1>
        <div>
            <HomeIcon/>
            <PlusCircleIcon/>
        </div>
    </div>
  )
}
