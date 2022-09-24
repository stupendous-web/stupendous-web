import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function TransitionCover() {
  const [className, setClassName] = useState("uk-hidden");

  const router = useRouter();

  useEffect(() => {
    const slideIn = () => {
      setClassName("slide-in-left");
    };

    router.events.on("beforeHistoryChange", slideIn);

    return () => {
      router.events.off("beforeHistoryChange", slideIn);
    };
  }, []);

  useEffect(() => {
    const slideOut = () => {
      setTimeout(() => {
        setClassName("slide-out-left");
      }, 500);
    };

    router.events.on("routeChangeComplete", slideOut);

    return () => {
      router.events.off("routeChangeComplete", slideOut);
    };
  }, []);

  return (
    <>
      <div
        className={className}
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          animationDelay: ".5s",
        }}
      >
        <div
          className={"uk-section-primary uk-flex uk-flex-center uk-flex-middle"}
          data-uk-height-viewport={""}
        >
          Loading
        </div>
      </div>
    </>
  );
}
