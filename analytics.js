import { Analytics } from "analytics";
import axios from "axios";

const analytics = Analytics({});
analytics
  .page((data) => {
    const properties = data.payload.properties;
    axios
      .post(
        "https://vercel.com/stupendous-web/analytics/BAj6ck2vor3o4N82QnxQ2d815Zdw/api/capture",
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
