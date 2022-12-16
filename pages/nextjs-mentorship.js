import Image from "next/image";
import Head from "next/head";
import { useGlobal } from "../lib/context";

import CTA from "../components/CTA";

import isometric from "../images/isometrics/isometric-2-1.png";

export default function NextJSMentorship() {
  const { setIsLoading } = useGlobal();

  return (
    <>
      <Head>
        <title>
          NextJS Mentorship | Web App Development Services | Stupendous Web
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
                Becoming a mentee in NextJS means you&apos;ll be learning some
                of the latest and leading technology in web and app development
                as well as opening doors in the development community to meet
                new people and build amazing things. Pay only what you can.
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
            Mentorship
          </h1>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-small"}>
          <div data-uk-grid={""}>
            <div className={"uk-width-1-3@s"} />
            <div className={"uk-width-2-3@s"}>
              <div className={"uk-align-left uk-margin-remove-adjacent"}>
                <img
                  src={"/images/me.png"}
                  alt={"Web App Development Services"}
                  className={"uk-border-circle"}
                  height={"100px"}
                  width={"100px"}
                />
              </div>
              <p>
                My name is Topher and I’m here to teach you NextJS and many
                other powerful tools that come along with it. I have 20 years of
                experience building web applications and phone apps via my web
                app development services. I started as a mentor because I want
                to make connections with other developers and give them the
                tools they need to develop the tools their future clients will
                need to shape the world for the better.
              </p>
              <h2>Why NextJS?</h2>
              <p>
                Javascript has become one of the top leaders in development.
                Javascript and Node are blazing fast and easy to work with and
                understand. NextJS makes it easy to build pre-rendered,
                full-stack, SEO-friendly applications with NodeJS. The power of
                Javascript, NodeJS, and NextJS make meeting the needs of a
                growing complex internet a piece of cake. I’ll teach you
                everything you need to know about building a NextJS app and API.
              </p>
              <h2>Build a Relationship</h2>
              <p>
                It is my goal to motivate other developers to exceed well past
                their potential, think critically, and create people-driven web
                applications and other products. The development community is a
                great place to learn how to create. I want to extend my
                knowledge to people who are interested in creating
                community-driven and useful apps. Having a mentor means you’ll
                learn to code, but also think about how to build relationships
                so you can find and help clients.
              </p>
              <h2>Sliding Scale</h2>
              <p>
                You heard me! There’s more to this than just money. Your
                contributions are appreciated. So, pay what you can, and let’s
                get to building incredible things together.
              </p>
              <p>
                Just email{" "}
                <a href={"mailto:topher@stupendousweb.com"}>
                  topher@stupendousweb.com
                </a>{" "}
                to apply.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
