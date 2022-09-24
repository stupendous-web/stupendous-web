import { useGlobal } from "../lib/context";
import Router from "next/router";

export default function Transition({ url, children }) {
  const { setTransitioning } = useGlobal();
  const transition = () => {
    setTransitioning(true);
    setTimeout(() => {
      Router.push(url);
      setTransitioning(false);
    }, 500);
  };

  return <>{children}</>;
}
