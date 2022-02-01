import Head from 'next/head';
import Image from 'next/image';
import styles from './Projet.module.scss';
import Link from 'next/link';
import { Bounce } from 'react-awesome-reveal';

export default function Projet(data) {
  return (
    <section id='project' className={styles.projet}>
      <div className={styles.projet_container}>
        <Bounce delay='10'>
          <h2 className='mainTitle'>Mes projets</h2>
        </Bounce>
        <div className={styles.projet_container_card}>
          {data.data &&
            data.data.map((element) => (
              <article
                key={element._id}
                className={styles.projet_container_card_article}
              >
                <div className={styles.projet_container_card_article_image}>
                  <Image
                    src={`/img/${element.img}`}
                    alt='Moi'
                    width={100}
                    height={50}
                    layout='responsive'
                    loading='eager'
                  />
                </div>

                <div className={styles.projet_container_card_article_text}>
                  <h3>{element.title}</h3>

                  <p>{element.desc}</p>
                  <button>
                    <Link
                      href={`${process.env.BASE_URL}/projet/${element.title}`}
                      as={`${process.env.BASE_URL}/projet/${element.title}`}
                      passHref={true}
                    >
                      En savoir plus
                    </Link>
                  </button>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
