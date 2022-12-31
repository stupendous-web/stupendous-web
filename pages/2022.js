import Image from "next/image";
import Head from "next/head";
import { useGlobal } from "../lib/context";

import CTA from "../components/CTA";

import isometric from "../images/isometrics/isometric-2-1.png";

export default function Review2022() {
  const { setIsLoading } = useGlobal();

  return (
    <>
      <Head>
        <title>
          2022 Review | Web App Development Services | Stupendous Web
        </title>
      </Head>
      <div className={"uk-section uk-section-xlarge uk-padding-remove-bottom"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-flex-middle"} data-uk-grid={""}>
            <div className={"uk-width-1-3@s uk-visible@s"}>
              <Image
                src={isometric}
                alt={"Web App Development Services"}
                priority
                onLoadingComplete={setIsLoading(false)}
              />
            </div>
            <div className={"uk-width-2-3@s"}>
              <p className={"uk-text-justify uk-dropcap monospace"}>
                At the end of every year I try my best with various tools and
                methods to assess who I am and my values to better serve myself,
                my communities, and my clients. Here are some conclusions I drew
                from 2022.
              </p>
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
            2022 Review
          </h1>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-small"}>
          <div data-uk-grid={""}>
            <div className={"uk-width-1-3@s"} />
            <div className={"uk-width-2-3@s"}>
              <ul className={"uk-list"}>
                <li>🤝 6 amazing new clients</li>
                <li>☕ ~1,095 cups of coffee</li>
              </ul>
              <p>
                I ask all my clients what their values are because I think it
                comes up in what all of us do. According to{" "}
                <a href={"https://personalvalu.es"} target={"_blank"}>
                  this test
                </a>{" "}
                at the end of 2022 I valued{" "}
                <i>
                  meaningful work, tolerance, equality, creativity, and
                  authenticity
                </i>
                . Building web apps makes me happy but when I build something
                meaningful to someone it gives me true happiness. Building
                meaningful websites helps my clients create a more diverse and
                tolerant world through inventiveness.
              </p>
              <p>
                I&apos;m also a mediator, INFP, or at least according to{" "}
                <a href={"https://www.16personalities.com/"} target={"_blank"}>
                  Meyer Briggs
                </a>
                . I identify as someone who tends to be open-minded and creative
                while also taking care in what I do.
              </p>
              <p>
                I love working with and connecting with people who want to see
                their values shine through their projects. My web app
                development services are centered heavily around this. I&apos;d
                love to hear about what&apos;s driving you in this new year. We
                can also connect over music; follow me on{" "}
                <a
                  href={
                    "https://open.spotify.com/user/128910259?si=49165d893098424f"
                  }
                  target={"_blank"}
                >
                  Spotify
                </a>{" "}
                to see what I&apos;ve been listening to. Happy new year!
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
