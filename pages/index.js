import Head from 'next/head';
import Home from './home';
import About from './about';
import api from '../helpers/api';
import Skill from './skill';
import Parcours from './parcours';
import Projet from './projet';
import Contact from './contact';

export default function Index(props) {
  return (
    <main className='main'>
        <Head>
        <title>Baptiste Faidherbe</title>
        <meta
          name='description'
          content='Bienvenue sur mon site. Baptiste Faidherbe, Développeur web sur Toulouse. Ce site a pour vocation de présenter qui je suis et  de vous exposer mon savoir faire. '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>


      <Home />
      <About data={props.data} />

      <Skill />

      <Parcours data={props.data2} />

      <Projet data={props.data3} />

      <Contact />
    </main>
  );
}

export async function getServerSideProps() {
  let resp;
  let data;
  let data2;
  let data3;

  try {
    resp = await api.get(`/api/About/`);
    data = await resp.data;
  } catch (error) {
    console.log(error);
  }

  try {
    resp = await api.get(`/api/Parcours/`);
    data2 = await resp.data;
  } catch (error) {
    console.log(error);
  }

  try {
    resp = await api.get(`/api/Projet/`, {
      params: {
        type: 'projets',
      },
    });
    data3 = await resp.data;
  } catch (error) {
    console.log(error);
  }

  return { props: { data, data2, data3 } };
}
