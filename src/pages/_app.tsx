import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`Corentin's portfolio`}</title>
        <meta name="description" content="This is a preview of my work" />

        <meta itemProp="name" content="Corentin's portfolio" />
        <meta itemProp="description" content="This is a preview of my work" />
        <meta itemProp="image" content="" />

        <meta property="og:url" content="https://corentintruffaut.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Corentin's portfolio" />
        <meta
          property="og:description"
          content="This is a preview of my work"
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Corentin's portfolio" />
        <meta
          name="twitter:description"
          content="This is a preview of my work"
        />
        <meta name="twitter:image" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
