import axios from "axios";

if (typeof window !== "undefined") {
  const path = window.location.pathname;
  const referrer =
    path.substring(1) === document.referrer.split("/")[3]
      ? "Direct"
      : document.referrer;
  axios
    .post("http://analytics.stupendousweb.com/api/store", {
      site: "stupendous-web",
      path: path,
      referrer: referrer,
    })
    .then((response) => {
      console.log(response.data);
    });
}
