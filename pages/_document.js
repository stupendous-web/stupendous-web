import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang={"en"}>
      <Head>
        <Script
          strategy={"lazyOnload"}
          id={"stupendous-analytics"}
        >{`const site = "642cf18729b904f37d859011";`}</Script>
        <Script
          strategy={"lazyOnload"}
          src={"https://stupendousanalytics.com/footprint.js"}
        />
        {process.env.NODE_ENV !== "development" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id={"google-analytics"}>
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
          });
      `}
            </Script>
          </>
        )}
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
