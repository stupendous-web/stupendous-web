import { useEffect } from "react";
import { useRouter } from "next/router";
import "remixicon/fonts/remixicon.css";
import { Provider } from "../lib/context";
import * as gtag from "../lib/gtag";
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
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      document.location.hostname !== "localhost" && gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  console.log(
    "%c ███  █████ █   █ ████  ████ █   █ ███   ███  █   █  ███  █     █ ████ ████\n" +
      "█       █   █   █ █   █ █    ██  █ █  █ █   █ █   █ █     █     █ █    █   █\n" +
      " ███    █   █   █ ████  ███  █ █ █ █  █ █   █ █   █  ███  █  █  █ ███  ████\n" +
      "    █   █   █   █ █     █    █  ██ █  █ █   █ █   █     █  █ █ █  █    █   █\n" +
      "████    █    ███  █     ████ █   █ ███   ███   ███  ████    █ █   ████ ████ .COM\n",
    "color: #d02670"
  );

  return (
    <>
      <StupendousAnalytics site={"642cf18729b904f37d859011"} />
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
