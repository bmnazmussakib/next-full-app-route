"use client"

import React, { useContext } from 'react'
import styles from './DarkMoodToggle.module.css'
import { themeContext } from '../../context/ThemeContext'

export default function DarkMoodToggle() {

    const {toggle, mode} = useContext(themeContext)
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌛</div>
            <div className={styles.icon}>🌞</div>
            <div className={styles.ball} style={mode === 'dark' ? { left: '5px' } : { right: '5px' }} />
        </div>
    )
}
