import React from 'react'
import styles from './page.module.css'

export default function layout({children}) {
  return (
    <div>
        <h1 className={styles.mainTitle}>Our WOrks</h1>
        {children}
    </div>
  )
}