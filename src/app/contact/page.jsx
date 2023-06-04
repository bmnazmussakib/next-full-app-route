import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
          alt=''
          src='/contact.png'
          fill={true}
          className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="email" placeholder='email' className={styles.input} />
          <textarea placeholder='message' cols="30" rows="10" className={styles.textarea}></textarea>
          <Button text='send' url='#' />
        </form>
      </div>
    </div>
  )
}
