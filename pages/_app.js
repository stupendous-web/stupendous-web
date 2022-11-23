import uikit from "uikit";
import "../styles/uikit/uikit.css";
import "remixicon/fonts/remixicon.css";
import { Provider } from "../lib/context";
import { DefaultSeo } from "next-seo";

import Navigation from "../components/Navigation";
import Pride from "../components/Pride";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import Loading from "../components/Loading";
import Cursor from "../components/Cursor";
import StupendousAnalytics from "stupendous-analytics-next";

function MyApp({ Component, pageProps }) {
  console.log(
    "%c  ___ _                          _            __      __   _    \n" +
      " / __| |_ _  _ _ __  ___ _ _  __| |___ _  _ __\\ \\    / /__| |__ \n" +
      " \\__ \\  _| || | '_ \\/ -_) ' \\/ _` / _ \\ || (_-<\\ \\/\\/ / -_) '_ \\\n" +
      " |___/\\__|\\_,_| .__/\\___|_||_\\__,_\\___/\\_,_/__/ \\_/\\_/\\___|_.__/.COM\n" +
      "              |_| ",
    "color: #ec008c"
  );
  return (
    <>
      <StupendousAnalytics site={"topher@stupendousweb.com"} />
      <Provider>
        <DefaultSeo
          title={
            "Web App Development Services | Stupendous Web | If you want to build community, build a stupendous web app"
          }
          description="If you want to build community, build a stupendous web app."
          openGraph={{
            url: "https://stupendousweb.com",
            title:
              "Web App Development Services | Stupendous Web | If you want to build community, build a stupendous web app.",
            description:
              "If you want to build community, build a stupendous web app.",
            images: [
              {
                url: "https://stupendousweb.com/images/social.jpg",
                alt: "Web App Development Services",
                type: "image/jpeg",
              },
            ],
            siteName:
              "Web App Development Services | Stupendous Web | If you want to build community, build a stupendous web app",
          }}
          twitter={{
            handle: "@stupendousweb",
            site: "@stupendousweb",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} />
        <Pride />
        <Footer />
        <Navigation />
        <Menu />
        <Logo />
        <Loading />
        <Cursor />
      </Provider>
    </>
  );
}

export default MyApp;
