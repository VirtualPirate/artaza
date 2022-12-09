import "../styles/globals.css";
import "../styles/introduction-section-svg.styles.css";
import "../styles/speciality-section-svg.styles.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
