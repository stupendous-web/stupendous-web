import { useGlobal } from "../lib/context";
import Router from "next/router";

export default function Transition({ url, children }) {
  const { setLoading } = useGlobal();
  const transition = () => {
    setLoading(true);
    setTimeout(() => {
      Router.push(url);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <span onClick={transition}>{children}</span>
    </>
  );
}
