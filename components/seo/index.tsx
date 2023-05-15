import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  imageSrc: string;
  keywords: Array<string>;
};

export default function SEO({
  title,
  description,
  imageSrc,
  keywords,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" itemProp="image" content={imageSrc} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageSrc} />
    </Head>
  );
}
