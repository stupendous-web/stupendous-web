import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={"en"}>
      <Head>
        <link
          href={"https://use.typekit.net/aqk5kto.css"}
          rel={"preload"}
          as={"font"}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
