import Head from 'next/head';
import Image from 'next/image';
import styles from './Parcours.module.scss';
import { Bounce } from 'react-awesome-reveal';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Parcours(data) {
  const [activeTimeLine, setActiveTimeLine] = useState(false);

  const changeNavBar = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 4100) {
      setActiveTimeLine(true);
    } else {
      setActiveTimeLine(false);
    }
    if (window.screen.availWidth <= 1471) {
      if (window.scrollY >= 4644 && window.scrollY <= 10644) {
        setActiveTimeLine(true);
      } else {
        setActiveTimeLine(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBar);
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id='parcours' className={styles.parcours}>
      <div className={styles.parcours_container}>
        <Bounce
          style={{ background: '#121d52', position: 'relative', zIndex: '9' }}
          delay='10'
        >
          <h2 className='mainTitle'>Mon parcours</h2>
        </Bounce>

        <div className={styles.parcours_container_timeLine}>
          <div
            className={
              !activeTimeLine
                ? styles.parcours_container_timeLine_point
                : `${styles.parcours_container_timeLine_point} ${styles.parcours_container_timeLine_activePoint}`
            }
          ></div>
        </div>
        {data.data &&
          data.data.map((element) => (
            <article
              key={element._id}
              className={styles.parcours_container_article}
            >
              <div className={styles.parcours_container_article_year}>
                {element.year}
              </div>

              <div
                data-aos='fade-up'
                className={
                  element.title === 'Administrateur réseau/système - POULT' ||
                  element.title ===
                    'Administrateur réseau/système Synergie mutulles' ||
                  element.title === 'Tecnicien réseau Sopamea' ||
                  element.title === 'Stage informatique Claudius Regaud' ||
                  element.title === 'Obtention du BAC'
                    ? `${styles.parcours_container_article_text} ${styles.parcours_container_article_text2}`
                    : styles.parcours_container_article_text
                }
              >
                <h3>{element.title}</h3>

                <p>{element.desc}</p>
              </div>

              <div
                data-aos='fade-up'
                className={
                  element.title === 'Administrateur réseau/système - POULT' ||
                  element.title ===
                    'Administrateur réseau/système Synergie mutulles' ||
                  element.title === 'Tecnicien réseau Sopamea' ||
                  element.title === 'Stage informatique Claudius Regaud' ||
                  element.title === 'Obtention du BAC'
                    ? `${styles.parcours_container_article_image} ${styles.parcours_container_article_image2}`
                    : styles.parcours_container_article_image
                }
              >
                <Image
                  src={`/img/${element.img}`}
                  alt={element.img}
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
