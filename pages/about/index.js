import Head from 'next/head';
import Image from 'next/image';
import styles from './About.module.scss';
import { Fade } from 'react-awesome-reveal';

export default function About(data) {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.about_container}>
        <h2 className='mainTitle'>Qui suis-je ?</h2>

        {data.data &&
          data.data.map((element) => (
            <article
              key={element._id}
              className={styles.about_container_article}
            >
              <div
                className={
                  element.title === 'Quand la passion, devient réelle'
                    ? `${styles.about_container_article_text} ${styles.about_container_article_text2}`
                    : styles.about_container_article_text
                }
              >
                <Fade delay='10'>
                  <h3>{element.title}</h3>
                </Fade>
                <p>{element.desc}</p>
              </div>
              <div
                className={
                  element.title === 'Quand la passion, devient réelle'
                    ? `${styles.about_container_article_image} ${styles.about_container_article_image2}`
                    : styles.about_container_article_image
                }
              >
                <Image
                  src={`/img/${element.img}`}
                  alt='Moi'
                  width={100}
                  height={100}
                  layout='responsive'
                  loading='eager'
                />
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
