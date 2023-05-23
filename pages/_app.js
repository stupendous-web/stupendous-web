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
    "%C🦸 STUPENDOUS WEB\ntopher@stupendousweb.com",
    "color: #d02670"
  );

  return (
    <>
      <StupendousAnalytics site={"642cf18729b904f37d859011"} />
      <Head>
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
