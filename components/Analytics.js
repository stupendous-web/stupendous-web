import { useEffect, useState } from "react";
import { Analytics as DWAnalytics } from "analytics";
import { Router, useRouter } from "next/router";
import axios from "axios";

export default function Analytics({ site }) {
  const router = useRouter();
  const [id, setId] = useState();

  const handleExit = () => {
    axios.post("https://analytics-api.stupendousweb.com/pageviews", {
      id: id,
      _method: "patch",
    });
  };

  useEffect(() => {
    if (!router.isReady) return;
    const { analytics } = router.query;
    if (process.env.NODE_ENV !== "development" && analytics !== "off") {
      DWAnalytics({}).page((data) => {
        const properties = data.payload.properties;
        axios
          .post("https://analytics-api.stupendousweb.com/pageviews", {
            site: site,
            anonymous_id: data.payload.anonymousId,
            path: properties.path,
            referrer: properties.referrer || "Direct",
            search: properties.search,
            height: properties.height,
            width: properties.width,
          })
          .then((response) => {
            setId(response.data);
          });
      });
      Router.events.on("routeChangeStart", () => {
        axios.post("https://analytics-api.stupendousweb.com/pageviews", {
          id: id,
          _method: "patch",
        });
      });
    }
  }, [router.isReady]);
}
