import "../styles/globals.css";
import "../styles/introduction-section-svg.styles.css";
import "../styles/speciality-section-svg.styles.css";

import Head from "next/head";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="kpbWRIhynKBS8mLaEpmMxE8cHsKNrjQmoMV7gS0lCps"
        />
        <base href={basePath + "/"} />
        <title> Artaza Portfolio </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
