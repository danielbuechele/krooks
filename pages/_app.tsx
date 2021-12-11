import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#4481F5" />
        <title>Krooks!</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preload" href="/button-hover.png" as="image" />
        <link rel="preload" href="/button-active.png" as="image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
