import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <b>Sakib 2023</b> All Right Reserved
      </div>
      <div className={styles.social}>
        <Image src='/1.png' width={20} height={20} alt='Sakib FAcebook' className={styles.icon}/>
        <Image src='/2.png' width={20} height={20} alt='Sakib FAcebook' className={styles.icon}/>
        <Image src='/3.png' width={20} height={20} alt='Sakib FAcebook' className={styles.icon}/>
        <Image src='/4.png' width={20} height={20} alt='Sakib FAcebook' className={styles.icon}/>
      </div>
    </div>
  )
}
