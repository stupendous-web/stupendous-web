import uikit from "uikit";
import "../styles/uikit/uikit.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Provider } from "../lib/context";
import Analytics from "../components/Analytics";

import Pride from "../components/Pride";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import Loading from "../components/Loading";
import Cursor from "../components/Cursor";
import StupendousAnalytics from "stupendous-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StupendousAnalytics site={"ee351665-bf97-4002-9089-516bed52a880"} />
      <Analytics site={"stupendous-web"} />
      <Provider>
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
