/* eslint-disable @next/next/no-page-custom-font */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function MonDocument() {
  return (
    <Html lang='fr'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300&display=swap'
          rel='stylesheet'
        />
        <script src='script/lord-icon-2.1.0.js'></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
