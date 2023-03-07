import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/graphics/artaza-logo.svg" />
      </Head>
      <body className="red-theme">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
