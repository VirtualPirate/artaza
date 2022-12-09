import Script from "next/script";

export default function BlogPage() {
  <>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css"
    ></link>
    <Script
      src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"
      strategy="lazyOnload"
    />
    <Script
      src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/languages/go.min.js"
      strategy="lazyOnload"
    />

    <div className="blog-page">
      <h1></h1>
    </div>
  </>;
}
