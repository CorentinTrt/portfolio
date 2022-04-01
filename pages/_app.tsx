import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`Corentin's portfolio`}</title>
        <meta name="description" content="This is a preview of my work" />
        <meta
          name="keywords"
          content="js, javascript, react, react.js, native, vue, vue.js, node, node.js, corentin, truffaut, portfolio, developer, web, montreal, paris"
        />
        <meta name="author" content="Corentin Truffaut" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
