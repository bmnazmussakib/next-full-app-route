import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('http://localhost:3000/api/post', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export const metadata = {
  title: 'Blogs',
  description: 'This is Blog Page',
}


export default async function Blog({ params }) {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {
        data.map(blog => (
          <Link href={`blog/${blog._id}`} className={styles.container} key={blog.id}>
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <Image
                  fill={true}
                  alt=''
                  src={blog.img}
                  className={styles.img}
                />
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>{blog.title}</h1>
                <p className={styles.desc}>{blog.desc}</p>
              </div>
            </div>
          </Link>
        ))
      }

    </div>
  )
}
