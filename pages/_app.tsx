import "../styles/globals.css";
import "../styles/introduction-section-svg.styles.css";
import "../styles/speciality-section-svg.styles.css";

import Head from "next/head";

const config = require("../next.config");

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <base href={config.basePath + "/"} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
