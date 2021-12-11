import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#4481F5" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
