import { useGlobal } from "../lib/context";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Loading() {
  const { isLoading } = useGlobal();
  const { text } = useTypewriter({
    words: ["Hang in there..."],
    typeSpeed: 30,
  });

  return (
    <>
      <div
        className={isLoading ? undefined : "slide-out-left"}
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          animationDelay: ".5s",
        }}
      >
        <div
          className={"uk-section-primary uk-flex uk-flex-middle"}
          data-uk-height-viewport={""}
        >
          <div className={"uk-width-1-1"}>
            <div className={"uk-container uk-container-xsmall"}>
              <p style={{ fontFamily: "monospace" }}>
                {text}
                <Cursor cursorStyle={"█"} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
