import uikit from "uikit";
import "../styles/uikit/uikit.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Provider } from "../lib/context";

import Navigation from "../components/Navigation";
import Pride from "../components/Pride";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import Loading from "../components/Loading";
import Cursor from "../components/Cursor";
import StupendousAnalytics from "stupendous-analytics";

function MyApp({ Component, pageProps }) {
  console.log(
    "  ___ _                          _            __      __   _    \n" +
      " / __| |_ _  _ _ __  ___ _ _  __| |___ _  _ __\\ \\    / /__| |__ \n" +
      " \\__ \\  _| || | '_ \\/ -_) ' \\/ _` / _ \\ || (_-<\\ \\/\\/ / -_) '_ \\\n" +
      " |___/\\__|\\_,_| .__/\\___|_||_\\__,_\\___/\\_,_/__/ \\_/\\_/\\___|_.__/.COM\n" +
      "              |_| "
  );
  return (
    <>
      <StupendousAnalytics site={"topher@stupendousweb.com"} />
      <Provider>
        <Navigation />
        <Component {...pageProps} />
        <Pride />
        <Footer />
        <Menu />
        <Logo />
        <Loading />
        <Cursor />
      </Provider>
    </>
  );
}

export default MyApp;
