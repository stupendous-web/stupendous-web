import "devicon";

export default function Project({
  children,
  images,
  name,
  icons,
  quote,
  style,
}) {
  return (
    <>
      <div className={"uk-section"} style={style}>
        <img
          src={images[0]}
          alt={"Software Development Services"}
          className={"uk-margin"}
        />
        <div className={"uk-child-width-1-3 uk-margin"} data-uk-grid={""}>
          {images?.slice(1, 4).map((image) => (
            <div key={image}>
              <img src={image} alt={"Software Development Services"} />
            </div>
          ))}
        </div>
        <h2>{name}</h2>
        <div>{children}</div>
        {quote}
        <p className={"uk-h2 uk-text-right"}>
          {icons.map((icon, key) => (
            <i key={key} className={icon + " uk-margin-small-left"} />
          ))}
        </p>
      </div>
    </>
  );
}
