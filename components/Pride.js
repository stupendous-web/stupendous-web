export default function Pride() {
  return (
    <>
      <div
        className={"uk-padding uk-position-fixed"}
        style={{ bottom: 0, left: 0 }}
      >
        <span
          uk-tooltip={
            "Stupendous Web is gay owned and believes that the most vibrant creativity and impactful problem-solving comes only from diversity!"
          }
          style={{ cursor: "pointer" }}
        >
          <span className={"uk-text-small"}>#gayowned&nbsp;</span>
          🌈
        </span>
      </div>
    </>
  );
}
