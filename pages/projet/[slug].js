import api from '../../helpers/api';
import Banner from '../../components/ui/Banner';
import styles from './Projet.module.scss';
import Caroussel from '../../components/ui/Caroussel';
import Head from 'next/head';

export default function Projet(props) {
  const str = props.data.desc2;
  const words = str.split('+');

  return (
    <div>
      <Head>
        <title>Projet</title>
        <meta
          name='description'
          content='Baptiste Faidherbe, Développeur web, je vous présente ici mes projets réalisées.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner data={props.data} />

      <main className={styles.projet}>
        <div className={styles.projet_container}>
          <div className={styles.projet_container_text}>
            <h2 className={styles.projet_container_text_title}>Présentation</h2>
            <p>{props.data.desc}</p>
            {props.data.title === 'Explorastro' && (
              <div className='video-responsive'>
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/ADIaSqQHLAY'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </div>
            )}
            {props.data.link && (
              <a
                style={{ fontWeight: 'bold' }}
                target='_blank'
                href={props.data.link}
              >
                Découvrir le site
              </a>
            )}
            <h2 className={styles.projet_container_text_title}>
              Fonctionnalités
            </h2>
            <p>L'application permets :</p>
            {words.map((element, index) => (
              <ul key={index}>
                <li>{element}</li>
              </ul>
            ))}
            <h2 className={styles.projet_container_text_title}>
              Technologie utilisée
            </h2>
            <h3>Côté front :</h3>
            <p>{props.data.desc3}</p>
            <h3>Côté back :</h3>
            <p>{props.data.desc4}</p>
            <h2 className={styles.projet_container_text_title}>Gallerie</h2>
            <Caroussel img={props.data.carouImg} />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  let resp;
  let data;
  const { slug } = context.query;

  try {
    resp = await api.get(`/api/Projet/`, {
      params: {
        type: 'projet',
        slug: slug,
      },
    });
    data = await resp.data;
  } catch (error) {
    console.log(error);
  }

  if (data === undefined) {
    data = 'null';
  }

  return { props: { data } };
}
