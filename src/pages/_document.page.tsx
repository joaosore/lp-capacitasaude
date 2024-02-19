import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="assets/css/comingsoon.css" />
      </Head>
      <body>
        <Main />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/js/comingsoon.js"></Script>
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
