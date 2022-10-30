import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [x, setX] = useState(-101);
  const [y, setY] = useState(-101);
  const [opacity, setOpacity] = useState(1);
  const [transform, setTransform] = useState("scale(1)");

  useEffect(() => {
    const setCursorCoordinates = (event) => {
      setX(event.clientX - 50);
      setY(event.clientY - 50);
    };
    const showCursor = () => {
      setOpacity(1);
    };
    const hideCursor = () => {
      setOpacity(0);
    };
    const expandCursor = (event) => {
      if (event.target.tagName === "A") {
        setTransform("scale(2)");
      } else {
        setTransform("scale(1)");
      }
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
    <>
      <svg
        xmlns={"http://www.w3.org/2000/svg"}
        viewBox={"0 0 100 100"}
        className={"uk-visible@m"}
        style={{
          height: "100px",
          width: "100px",
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
        <circle cx={50} cy={50} r={49} style={{ fill: "#d02670" }} />
      </svg>
    </>
  );
}
