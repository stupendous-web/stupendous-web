import axios from "axios";

if (typeof window !== "undefined") {
  const path = window.location.pathname;
  const referrer =
    path.substring(1) === document.referrer.split("/")[3]
      ? "Direct"
      : document.referrer;
  if (window.location.hostname !== "localhost") {
    axios.post("https://analytics.stupendousweb.com/api/store", {
      id: "stupendous-web",
      path: path,
      referrer: referrer,
      date: new Date(),
    });
    console.log({
      id: "stupendous-web",
      path: path,
      referrer: referrer,
      date: new Date(),
    });
  }
}
