import Image from "next/image";
import Head from "next/head";
import { useGlobal } from "../lib/context";

import CTA from "../components/CTA";

import isometric from "../images/isometrics/isometric-3-1.png";

export default function Philosophy() {
  const { setIsLoading } = useGlobal();

  const magenta = [
    { name: "Magenta 100", hex: "2a0a18" },
    { name: "Magenta 70", hex: "9f1853" },
    { name: "Magenta 60", hex: "d02670" },
    { name: "Magenta 50", hex: "ee5396" },
  ];

  const cyan = [
    { name: "Cyan 100", hex: "061727" },
    { name: "Cyan 70", hex: "00539a" },
    { name: "Cyan 60", hex: "0072c3" },
    { name: "Cyan 50", hex: "1192e8" },
  ];

  const gray = [
    { name: "Gray 100", hex: "161616" },
    { name: "Gray 30", hex: "c6c6c6" },
    { name: "Gray 20", hex: "e0e0e0" },
    { name: "Gray 10", hex: "f4f4f4" },
  ];

  return (
    <>
      <Head>
        <title>
          Philosophy | Software Development Services | Stupendous Web
        </title>
      </Head>
      <div className={"uk-section uk-section-xlarge uk-padding-remove-bottom"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-flex-middle"} data-uk-grid={""}>
            <div className={"uk-width-1-3@s uk-visible@s"}>
              <Image
                src={isometric}
                alt={"Software Development Services"}
                priority
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
            <div className={"uk-width-2-3@s"}>
              <p className={"uk-text-justify uk-dropcap"}>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container"}>
          <h1
            className={"uk-heading-2xlarge uk-text-right"}
            data-uk-parallax={"x: 0, -800"}
          >
            Philosphy
          </h1>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-small"}>
          <div data-uk-grid={""}>
            <div className={"uk-width-1-3@s"} />
            <div className={"uk-width-2-3@s"}>
              <h2>Some Shades</h2>
              <div className={"uk-margin"}>
                <div className={"uk-flex uk-light"}>
                  {magenta.map((color) => {
                    return (
                      <div
                        className={"uk-padding-small square"}
                        style={{
                          background: `#${color.hex}`,
                        }}
                        key={color.hex}
                      >
                        <div className={"uk-text-small square-content"}>
                          <div>{color.name}</div>
                          <div>#{color.hex}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={"uk-flex uk-light"}>
                  {cyan.map((color) => {
                    return (
                      <div
                        className={"uk-padding-small square"}
                        style={{
                          background: `#${color.hex}`,
                        }}
                        key={color.hex}
                      >
                        <div className={"uk-text-small square-content"}>
                          <div>{color.name}</div>
                          <div>#{color.hex}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={"uk-flex uk-light"}>
                  {gray.map((color) => {
                    return (
                      <div
                        className={"uk-padding-small square"}
                        style={{
                          background: `#${color.hex}`,
                        }}
                        key={color.hex}
                      >
                        <div className={"uk-text-small square-content"}>
                          <div>{color.name}</div>
                          <div>#{color.hex}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <h2>Some Fonts</h2>
              <div className={"uk-text-right"}>
                <p className={"uk-margin-remove"}>Pragraph</p>
                <h3 className={"uk-margin-remove"}>Heading 3</h3>
                <h2 className={"uk-margin-remove"}>Heading 2</h2>
                <h1 className={"uk-margin-remove"}>Heading 1</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
