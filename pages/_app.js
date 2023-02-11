import uikit from "uikit";
import "../styles/uikit/uikit.css";
import "remixicon/fonts/remixicon.css";
import { Provider } from "../lib/context";

import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import Pride from "../components/Pride";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import Loading from "../components/Loading";
import Cursor from "../components/Cursor";
import StupendousAnalytics from "stupendous-analytics-next";

function MyApp({ Component, pageProps }) {
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
      <StupendousAnalytics site={"topher@stupendousweb.com"} />
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
    </>
  );
}

export default MyApp;
