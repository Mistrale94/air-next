import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.header}>
        <nav>
          <Link href="/Works">
            <a>Home <span className={styles.icon}><PlusCircleIcon/></span></a>
          </Link>
          <a href="#">Works</a>
          <a href="#">Contact</a>
        </nav>
    </div>
  )
}
