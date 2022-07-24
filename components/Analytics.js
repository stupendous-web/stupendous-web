import { useEffect, useState } from "react";
import { Analytics as DWAnalytics } from "analytics";
import { useRouter } from "next/router";
import axios from "axios";

export default function Analytics({ site }) {
  const router = useRouter();
  const [id, setId] = useState();

  const sendEndTimestamp = () => {
    console.log(id);
    axios
      .post("https://analytics-api.stupendousweb.com/pageviews", {
        id: id,
        _method: "patch",
      })
      .then((response) => {
        console.log(response.data);
      });
  };
  useEffect(() => {
    window.addEventListener("beforeunload", sendEndTimestamp);
    return window.removeEventListener("beforeunload", sendEndTimestamp);
  }, []);

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
            console.log(response.data);
            setId(response.data);
            sendEndTimestamp();
          });
      });
    }
  }, [router.isReady]);
}
