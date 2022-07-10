import { Analytics } from "analytics";
import axios from "axios";

const analytics = Analytics({});
analytics
  .page((data) => {
    const properties = data.payload.properties;
    axios
      .post(
        "https://vercel.com/stupendous-web/analytics/oRF5qHe8S4n8MTMe1s8NDtiTnB3x/api/capture",
        {
          path: properties.path,
          referrer: properties.referrer,
          search: properties.search,
          height: properties.height,
          width: properties.width,
        }
      )
      .then();
  })
  .then();
