import { useEffect } from "react";
import { Analytics as DWAnalytics } from "analytics";
import axios from "axios";

export default function Analytics() {
  const analytics = DWAnalytics({});
  useEffect(() => {
    analytics.page().then((data) => {
      const properties = data.payload.properties;
      axios
        .post("https://analytics.stupendousweb.com/api/capture", {
          site: "stupendous-web",
          anonymousId: data.payload.anonymousId,
          path: properties.path,
          referrer: properties.referrer,
          height: properties.height,
          width: properties.width,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);
  return;
}
