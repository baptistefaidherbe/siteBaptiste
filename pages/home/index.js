import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.scss';
import { useEffect, useRef } from 'react';
import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Parallax } from 'react-scroll-parallax';
import FallingStar from '../../components/ui/FallingStar';
import Moon from '../../components/ui/Moon';
import MediaQuery from 'react-responsive';

export default function Home() {
  const titleElement = useRef();

  useEffect(() => {
    const text = 'Developpeur web';
    const text2 = '|';
    const tabText = text.split('');

    let timer;

    function write() {
      if (tabText.length > 0) {
        titleElement.current.innerHTML += tabText.shift();

        if (tabText.length === 0) {
          const span = document.createElement('span');
          var spanValue = titleElement.current.appendChild(span);

          spanValue.innerHTML = text2;

          spanValue.classList.add(styles.home_banner_container_clignote);
        }
      } else {
        clearTimeout(timer);
      }

      timer = setTimeout(write, 100);
    }
    write();
  }, []);
  return (
    <section id='home' className={styles.home}>
      <div className={styles.home_banner}>
        <MediaQuery minWidth={1000}>
          <Moon />
          <FallingStar />
          <FallingStar />
        </MediaQuery>

        <Parallax
          className={styles.home_banner_parallax}
          y={[-80, 50]}
          tagOuter='figure'
        >
          <div className={styles.home_banner_galaxy1}>
            <Image
              src='/img/galaxy.png'
              alt='blob'
              width={500}
              height={500}
              layout='responsive'
              loading='eager'
            />
          </div>
        </Parallax>
        <Parallax
          className={styles.home_banner_parallax}
          x={[-30, 0]}
          tagOuter='figure'
        >
          <div className={styles.home_banner_galaxy2}>
            <Image
              src='/img/galaxy.png'
              alt='blob'
              width={500}
              height={500}
              layout='responsive'
              loading='eager'
            />
          </div>
        </Parallax>

        <div className={styles.home_banner_container}>
          <h1>
            Je suis <span>Baptiste</span> Faidherbe,
          </h1>
          <h2 ref={titleElement}></h2>
          <div className={styles.home_banner_container_socialNetwork}>
            <ul>
              <li className={styles.home_banner_container_socialNetwork_fb}>
                <FiFacebook />
              </li>
              <li className={styles.home_banner_container_socialNetwork_gh}>
                <FiGithub />
              </li>
              <li className={styles.home_banner_container_socialNetwork_lk}>
                <FiLinkedin />
              </li>
            </ul>
            <span>Suivez moi sur les réseaux sociaux</span>
          </div>
        </div>
        <div className={styles.home_banner_profil}>
          <Image
            src='/img/bapt.png'
            alt='Moi'
            width={100}
            height={90}
            layout='responsive'
            loading='eager'
            className={styles.home_banner_profil_image}
          />
        </div>
      </div>
    </section>
  );
}
