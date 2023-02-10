import Image from "next/image";
import Head from "next/head";
import { useGlobal } from "../lib/context";

import CTA from "../components/CTA";

import isometric from "../images/isometrics/isometric-2-1.png";

export default function About() {
  const { setIsLoading } = useGlobal();

  return (
    <>
      <Head>
        <title>About | Web App Development Services | Stupendous Web</title>
      </Head>
      <div className={"uk-section uk-section-xlarge uk-padding-remove-bottom"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-flex-middle"} data-uk-grid={""}>
            <div className={"uk-width-1-3@s uk-visible@s"}>
              <Image
                src={isometric}
                alt={"Web App Development Services"}
                priority
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
            <div className={"uk-width-2-3@s"}>
              <p className={"uk-text-justify uk-dropcap monospace"}>
                Do you value community, equality, meaningful work, and
                authenticity? My web app development services help people like
                you to engage with their audiences and tribes in creative and
                impactful ways.
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
            About
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
                Hello, pioneers. I&apos;m Topher [INFP]. I&apos;m here to help
                elevate your projects that support community, compassion,
                tolerance, equality, meaningful work, and authenticity through
                my custom web app development services. My degree in web
                application development from CSU, award-winning projects, and
                years of work experience are all at your disposal.
              </p>
              <h2>What&apos;s a Web App???</h2>
              <p>
                Take your product further. Server technology and database access
                will make your web app powerful and engaging. Web apps are like
                tool kits that are hosted online, similar to a website. But most
                websites are still, inactive, and boring. Your web app will know
                no limits. My web app development services will add value to
                your brand.
              </p>
              <h2>Strategy</h2>
              <p>
                Your mission and objectives are at the forefront throughout the
                entire development process. We&apos;ll look at your values and
                the communities you serve to fine-tune your product and pitch
                even before production. Let&apos;s work together to create web
                app development services that reflect you and your goals.
              </p>
              <h2>How Does this Work?</h2>
              <p>
                Let&apos;s get you up and running with web app development
                services in four easy steps. First, schedule your 2 FREE 1-hour
                consultations. You&apos;ll receive a free creative brief and
                project plan. We&apos;ll build you a secret website where you
                can preview our progress anytime. Then when the time is right,
                we&apos;ll launch it to the web publicly. I&apos;m always here
                to answer questions, make updates, and be your guide to making
                this fast, easy, and even fun!
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
