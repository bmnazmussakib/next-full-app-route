import Image from 'next/image'
import styles from './page.module.css'
import hero from 'Public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for Digital Products</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quaerat totam sunt recusandae non magni?</p>
        <Button text='See Our Works' url='/portfolio' />
      </div>
      <div className={styles.item}>
        <Image src={hero} alt='' className={styles.img}/>
      </div>
    </div>
  )
}
