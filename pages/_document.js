import { Html, Head, Main, NextScript } from "next/document";
import * as gtag from "../lib/gtag";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang={"en"}>
      <Head>
        <meta name={"viewport"} content={"width=device-width"} />
        <link
          href={"https://use.typekit.net/aqk5kto.css"}
          rel={"preload"}
          as={"font"}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Script
        strategy={"afterInteractive"}
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
