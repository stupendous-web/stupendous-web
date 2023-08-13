import { useEffect, useState } from "react";
import { Show } from "@chakra-ui/react";

export default function Cursor() {
  const [x, setX] = useState(-145);
  const [y, setY] = useState(-145);
  const [opacity, setOpacity] = useState(1);
  const [transform, setTransform] = useState("scale(1)");

  useEffect(() => {
    const setCursorCoordinates = (event) => {
      setX(event.clientX - 72);
      setY(event.clientY - 72);
    };
    const showCursor = () => {
      setOpacity(1);
    };
    const hideCursor = () => {
      setOpacity(0);
    };
    const expandCursor = (event) => {
      event.target.closest("iframe") ? setOpacity(0) : setOpacity(1);
      event.target.closest("a") || event.target.closest("button")
        ? setTransform("scale(2)")
        : setTransform("scale(1)");
    };
    document.addEventListener("mousemove", (event) =>
      setCursorCoordinates(event)
    );
    document.addEventListener("mouseenter", () => showCursor());
    document.addEventListener("mouseleave", () => hideCursor());
    document.addEventListener("mouseover", (event) => expandCursor(event));
    return () => {
      document.removeEventListener("mousemove", (event) =>
        setCursorCoordinates(event)
      );
      document.removeEventListener("mouseenter", () => showCursor());
      document.removeEventListener("mouseleave", () => hideCursor());
      document.removeEventListener("mouseover", (event) => expandCursor(event));
    };
  }, []);

  return (
    <Show above={"md"}>
      <svg
        xmlns={"http://www.w3.org/2000/svg"}
        viewBox={"0 0 100 100"}
        style={{
          height: "144px",
          width: "144px",
          pointerEvents: "none",
          position: "fixed",
          top: y,
          left: x,
          opacity: opacity,
          transition: "transform .5s ease-in-out",
          transform: transform,
          mixBlendMode: "difference",
          zIndex: 2000,
        }}
      >
        <circle cx={50} cy={50} r={49} style={{ fill: "#ffffff" }} />
      </svg>
    </Show>
  );
}
