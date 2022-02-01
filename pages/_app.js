import '../styles/globals.scss';
import Head from 'next/head';
import Layout from '../components/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Bptiste Faidherbe</title>
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Layout>
  );
}

export default MyApp;
