import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/chakra";
import "../styles/global.css";
import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import Pride from "../components/Pride";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Cursor from "../components/Cursor";

function MyApp({ Component, pageProps }) {
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    window.location.hostname === "stupendousweb.com" && setIsProduction(true);
    console.log(
      "%c🦸 STUPENDOUS WEB\nEmail topher@stupendousweb.com to learn more.\n",
      "color: #d02670"
    );
  }, []);

  return (
    <>
      {isProduction && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy={"afterInteractive"}
        />
      )}
      <Head>
        {isProduction && (
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
        <Component {...pageProps} />
        <Footer />
        <Pride />
        <Navigation />
        <Contact />
        <Menu />
        <Cursor />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
