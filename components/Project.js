import "devicon";
import Image from "next/image";

export default function Project({
  children,
  images,
  name,
  icons,
  quote,
  style,
}) {
  function importImages(require) {
    let images = {};
    require.keys().forEach((item) => {
      images[item.replace("./", "")] = require(item);
    });

    return images;
  }
  const context = importImages(
    require.context("/images/projects", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <>
      <div className={"uk-section"} style={style}>
        <Image
          src={context[images[0]]}
          alt={"Software Development Services"}
          className={"uk-margin"}
        />
        <div className={"uk-child-width-1-3 uk-margin"} data-uk-grid={""}>
          {images?.slice(1, 4).map((image) => (
            <div key={image}>
              <Image
                src={context[image]}
                alt={"Software Development Services"}
              />
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
