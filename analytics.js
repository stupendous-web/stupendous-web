import { Analytics } from "analytics";
import axios from "axios";

const analytics = Analytics({});
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
