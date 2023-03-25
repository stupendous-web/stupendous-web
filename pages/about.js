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
        <title>About | Software Development Services | Stupendous Web</title>
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
              <p className={"uk-text-justify uk-dropcap monospace"}>
                Do you value meaningful work, tolerance, equality, creativity,
                and authenticity? My software development services help people
                like you to engage with their audiences and tribes in creative
                and impactful ways.
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
                  alt={"Software Development Services"}
                  className={"uk-border-circle"}
                  height={"100px"}
                  width={"100px"}
                />
              </div>
              <p>
                Hello, pioneers. I&apos;m Topher [INFP]. I&apos;m here to help
                elevate your projects that support meaningful work, tolerance,
                equality, creativity, and authenticity through my custom
                software development services. My degree in web application
                development from CSU, award-winning projects, and years of work
                experience are all at your disposal.
              </p>
              <h2>Website or App?</h2>
              <p>
                Your customers need power and utility, and not just another
                still, inactive, and even boring website. Engaging with your
                customers means investing in more than just a website. My
                software development services will bring value to your product
                via your new web app. Not to be entirely confused with apps on
                your phone, web apps integrate the latest web technologies with
                your data to bring your audiences something better than just a
                landing page. Don&apos;t leave your customers in the dust; give
                them the latest, greatest, and most value with a sparkly new web
                app.
              </p>
              <h2>iOS and Android</h2>
              <p>
                Keep your product at your customers&apos; finger tips. In
                addition to building something powerful and useful, together we
                can build something your customers can access easily anywhere in
                the world. In addition to building for the web, my software
                development services also include building apps for phones. With
                the latest technologies we&apos;ll create easier access to you
                and your brand in the form of a iOS and Android apps. Keep your
                customer engagement high, increasing your product value, by
                allowing your customers to take you in their pockets anywhere.
              </p>
              <h2>Strategy</h2>
              <p>
                Tell me about your values, the communities your serve, your
                mission, and your objectives! Better knowing you, your brand,
                and your product or service creates a stronger and more valuable
                application. My software development services are focused on and
                centered around your mission and objectives throughout the
                entire development process. Before, during, and even after
                production, we&apos;ll continue to fine-tune your product and
                pitch. I will ensure your web, iOS, and Android apps embody you
                and your values boldly and proudly.
              </p>
              <h2>Process</h2>
              <p>
                Let&apos;s get you up and running with software development
                services in three easy steps. First, schedule the first of your
                two FREE 1-hour consultations. After your first consultation,
                you&apos;ll receive a creative brief and project plan. Secondly,
                we&apos;ll build you a secret website where you can preview our
                progress anytime. Then, when the time is right, we&apos;ll
                launch your apps to the web and app stores publicly. I&apos;m
                always here to answer questions, maintain your software and make
                updates to it, and be your guide to making this fast, easy, and
                even fun!
              </p>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
