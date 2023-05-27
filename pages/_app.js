import Head from "next/head";
import { Provider } from "../lib/context";
import StupendousAnalytics from "stupendous-analytics-next";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/chakraUIHelper";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/global.css";
import "slick-carousel/slick/slick.css";

import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import Pride from "../components/Pride";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import Loading from "../components/Loading";
import Cursor from "../components/Cursor";

function MyApp({ Component, pageProps }) {
  console.log(
    "%c🦸 STUPENDOUS WEB\nEmail topher@stupendousweb.com to learn more.\n",
    "color: #d02670"
  );

  return (
    <>
      <StupendousAnalytics site={"642cf18729b904f37d859011"} />
      <Head>
        {/* https://nextjs.org/docs/messages/next-script-for-ga */}
        {process.env.NODE_ENV !== "development" && (
          <>
            <script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
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
        <ParallaxProvider>
          <Provider>
            <Component {...pageProps} />
            <Footer />
            <Pride />
            <Navigation />
            <Contact />
            <Menu />
            <Logo />
            <Loading />
            <Cursor />
          </Provider>
        </ParallaxProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
