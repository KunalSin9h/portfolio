import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg" href="/public/profile.svg" />
      </Head>
      <body className="flex  bg-black items-center justify-center h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
