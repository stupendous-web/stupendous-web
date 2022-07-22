import "devicon";

export default function Project({
  children,
  image,
  name,
  icons,
  quote,
  style,
  link,
}) {
  return (
    <>
      <div className={"uk-section"} style={style}>
        {link ? (
          <a href={link} title={name}>
            <img src={image} alt={"Web App Development Services"} />
          </a>
        ) : (
          <img src={image} alt={"Web App Development Services"} />
        )}
        <h2>{name}</h2>
        <div>{children}</div>
        {quote}
        <p className={"uk-text-emphasis uk-text-right"}>
          {icons.map((icon, key) => {
            return <i key={key} className={icon + " uk-margin-small-left"} />;
          })}
        </p>
      </div>
    </>
  );
}
