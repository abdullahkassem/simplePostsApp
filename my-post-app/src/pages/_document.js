import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        <meta name="description" content="Simple app that shows posts" />
        <link rel="icon" type="image/png" sizes="32x32" href="/social-media.png" />

      </Head>
      <body id="mainBody">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
