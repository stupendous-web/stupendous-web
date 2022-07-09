import uikit from "uikit";
import "../styles/uikit/uikit.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { init } from "@socialgouv/matomo-next";

import Pride from "../components/Pride";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Loading from "../components/Loading";
import Cursor from "../components/Cursor";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init({ url: "https://analytics.stupendousweb.com/", siteId: 1 });
  }, [0]);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Pride />
      <Footer />
      <Menu />
      <Loading />
      <Cursor />
    </Provider>
  );
}

export default MyApp;
