import { Analytics } from "analytics";
import axios from "axios";

const analytics = Analytics({});
analytics
  .page((data) => {
    const properties = data.payload.properties;
    axios
      .post("https://analytics-lac.vercel.app/api/capture", {
        path: properties.path,
        referrer: properties.referrer,
        search: properties.search,
        height: properties.height,
        width: properties.width,
      })
      .then((response) => {
        console.log(response.data);
      });
  })
  .then();
