import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return notFound()
  }
  return res.json();
}

export default async function BlogPost({params}) {

  const data  = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image 
            src='https://images.pexels.com/photos/3370021/pexels-photo-3370021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            width={40}
            height={40}
            className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
          fill={true}
          alt=''
          src='https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className={styles.image}
           />
        </div>

      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nesciunt animi eveniet rem minima quo reprehenderit molestiae itaque adipisci possimus laudantium similique, reiciendis beatae inventore tenetur corrupti eaque commodi aliquid consectetur? Itaque exercitationem veritatis optio minima esse rem minus sapiente ab tempore quia, repellendus, cumque sed similique fugit provident voluptatem doloribus nostrum ut, corporis id modi debitis fuga eius. Ratione amet odio tenetur velit ex. Inventore id et temporibus repudiandae vel, quasi natus possimus voluptate magni, maxime tempora sequi facere! Numquam delectus, labore doloremque nam vel eos dicta rem blanditiis quae, ducimus velit impedit cumque cupiditate quis, ad minus molestiae libero dolores quas nihil accusamus harum beatae! 
        <br /><br />
        Pariatur a tenetur libero quam. Eos cupiditate delectus consequuntur explicabo laudantium consectetur dolor cum fuga iure optio ipsum, quam libero asperiores molestias hic sapiente nam earum officia et. Tempore maiores quae incidunt repudiandae numquam, explicabo sunt veritatis, illo facere itaque cupiditate sint tempora quo amet reprehenderit commodi? A nisi aliquid nam? Voluptatem iusto est nulla repudiandae quas sit velit, animi ad odit neque magnam nisi aliquam aut tenetur quis soluta voluptates maiores. Veritatis, perspiciatis placeat culpa cumque porro itaque ipsa ad quaerat nulla, ipsum incidunt deserunt, magnam quibusdam eligendi sint consequatur soluta vitae?
        <br /><br />
        Pariatur a tenetur libero quam. Eos cupiditate delectus consequuntur explicabo laudantium consectetur dolor cum fuga iure optio ipsum, quam libero asperiores molestias hic sapiente nam earum officia et. Tempore maiores quae incidunt repudiandae numquam, explicabo sunt veritatis, illo facere itaque cupiditate sint tempora quo amet reprehenderit commodi? A nisi aliquid nam? Voluptatem iusto est nulla repudiandae quas sit velit, animi ad odit neque magnam nisi aliquam aut tenetur quis soluta voluptates maiores. Veritatis, perspiciatis placeat culpa cumque porro itaque ipsa ad quaerat nulla, ipsum incidunt deserunt, magnam quibusdam eligendi sint consequatur soluta vitae?
        </p>
      </div>
    </div>
  )
}
