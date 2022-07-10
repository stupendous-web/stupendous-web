import { useEffect } from "react";
import { Analytics as DWAnalytics } from "analytics";
import axios from "axios";

export default function Analytics({ site }) {
  const analytics = DWAnalytics({});
  useEffect(() => {
    analytics.page().then((data) => {
      const properties = data.payload.properties;
      axios.post("https://analytics.stupendousweb.com/api/capture", {
        site: site,
        anonymousId: data.payload.anonymousId,
        path: properties.path,
        referrer: properties.referrer,
        height: properties.height,
        width: properties.width,
      });
    });
  }, []);
  return;
}
