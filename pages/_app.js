import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { Provider } from "../lib/context";
import StupendousAnalytics from "stupendous-analytics-next";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/chakra";
import "../styles/global.css";

import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import Pride from "../components/Pride";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Loading from "../components/Loading";
import Cursor from "../components/Cursor";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log(
      "%c🦸 STUPENDOUS WEB\nEmail topher@stupendousweb.com to learn more.\n",
      "color: #d02670"
    );
  }, []);

  return (
    <>
      <StupendousAnalytics site={"642cf18729b904f37d859011"} />
      {process.env.NODE_ENV !== "development" && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy={"afterInteractive"}
        />
      )}
      <Head>
        {process.env.NODE_ENV !== "development" && (
          <>
            <script>
              {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                  });
                `}
            </script>
          </>
        )}
        <meta name={"viewport"} content={"width=device-width"} />
      </Head>
      <ChakraProvider theme={theme}>
        <Provider>
          <Component {...pageProps} />
          <Analytics />
          <Footer />
          <Pride />
          <Navigation />
          <Contact />
          <Menu />
          <Loading />
          <Cursor />
        </Provider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
