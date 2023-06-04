import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          fill={true}
          className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story Tellers</h1>
          <h2 className={styles.imgDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We are</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis dolorem, sit fugiat odio totam consequuntur distinctio provident voluptatibus ipsa reprehenderit!
            <br /><br />
            Eligendi illo quidem enim nobis id fuga molestiae voluptatem totam dicta numquam voluptatum maxime recusandae odio delectus voluptates ullam natus perspiciatis, magni ducimus nesciunt, ex dignissimos reiciendis sed ab.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis rerum itaque alias quam ad, sapiente nam suscipit reprehenderit sint dolorum eos maxime commodi beatae architecto fuga tenetur optio asperiores!
            <br />
            <br /> - Daynamic Website
            <br />
            <br /> - Daynamic Website
            <br />
            <br /> - Daynamic Website
          </p>
          <Button text='Contact' url='/contact'/>
        </div>
      </div>
    </div>
  )
}
