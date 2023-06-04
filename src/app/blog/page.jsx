import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async function Blog({ params }) {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {
        data.map(blog => (
          <Link href={`blog/${blog.id}`} className={styles.container} key={blog.id}>
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <Image
                  fill={true}
                  alt=''
                  src='https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  className={styles.img}
                />
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>{blog.title}</h1>
                <p className={styles.desc}>{blog.body}</p>
              </div>
            </div>
          </Link>
        ))
      }

    </div>
  )
}
