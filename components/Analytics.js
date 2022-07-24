import { useEffect } from "react";
import { Analytics as DWAnalytics } from "analytics";
import { useRouter } from "next/router";
import axios from "axios";

export default function Analytics({ site }) {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const { analytics } = router.query;
    if (process.env.NODE_ENV !== "development" && analytics !== "off") {
      DWAnalytics({}).page((data) => {
        const properties = data.payload.properties;
        axios.post("https://analytics-api.stupendousweb.com/pageviews", {
          site: site,
          anonymous_id: data.payload.anonymousId,
          path: properties.path,
          referrer: properties.referrer,
          search: properties.search,
          height: properties.height,
          width: properties.width,
        });
      });
    }
  }, [router.isReady]);
}
