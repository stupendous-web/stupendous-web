import Image from "next/image";
import Head from "next/head";
import { useGlobal } from "../lib/context";

import CTA from "../components/CTA";

import isometric from "../images/isometrics/isometric-2-2.png";

export default function Services() {
  const { setIsLoading } = useGlobal();

  const sections = ["Consultation", "Development", "Hosting", "LTS"];

  return (
    <>
      <Head>
        <title>Services | Web App Development Services | Stupendous Web</title>
      </Head>
      <div className={"uk-section uk-section-xlarge uk-padding-remove-bottom"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-flex-middle"} data-uk-grid={""}>
            <div className={"uk-width-1-3@s uk-visible@s"}>
              <Image
                src={isometric}
                alt={"Web App Development Services"}
                priority
                OnLoadingComplete={setIsLoading(false)}
              />
            </div>
            <div className={"uk-width-2-3@s"}>
              <p className={"uk-text-justify uk-dropcap monospace"}>
                Let&apos;s make it easy for you to meet your goals, build
                relationships, improve your brand, and get your product out to
                interested customers. We&apos;ll start by building a
                revolutionary project. Then we&apos;ll deliver it to your
                clients and keep it modern and new!
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
            Services
          </h1>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-small"}>
          <div data-uk-grid={""}>
            <div className={"uk-width-1-3@s"} />
            <div className={"uk-width-2-3@s"}>
              <ul
                className={"uk-subnav uk-margin-large"}
                data-uk-scrollspy-nav={"scroll: true; offset: 36"}
              >
                {sections.map((section, key) => {
                  return (
                    <li key={key}>
                      <a href={"#" + section}>{section}</a>
                    </li>
                  );
                })}
              </ul>
              <p>
                Your project is more than just a pretty website. My web app
                development services are more comprehensive than that. I&apos;m
                focused on launching a project for you that excels your brand.
                I&apos;m going to surround myself in your product, build you a
                top-of-the-line web application that reflects your product, give
                it a place on the web so your community can find it and connect
                with you, and maintain the project even after it&apos;s done.
              </p>
              <h2 id={"Consultation"}>Two FREE Consultations</h2>
              <p>
                I enjoy offering these consultations at no charge because I
                believe working closely together is how we build strong
                communities. I offer two consultations alongside my web app
                development services. In the first, I&apos;ll get to know you
                and the value your product is providing your communities. In the
                second, we&apos;ll make a plan for getting your product in the
                hands of those who need it most via your web app. These
                consultations are designed for us to better deliver your product
                in a more impactful way over the web.
              </p>
              <h2 id={"Development"}>Web App Development Services</h2>
              <p>
                Building a community is probably one of your highest goals. It
                can be challenging, but the internet is a good place to start. I
                can help you engage with your audiences through website and web
                app development services. We&apos;ll work together to start a
                project that helps you achieve your goals best. With the latest
                technologies, the possibilities are endless, but here are a few
                things we can build to help you build community:
              </p>
              <ul className={"uk-list"}>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Websites
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  E-Commerce
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Web Portals
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Content Management Systems (CMS)
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Social Media
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Discussion Forums
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Email
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Chat Rooms
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Image Editors
                </li>
              </ul>
              <h2 id={"Hosting"}>Secure Managed Domain and Hosting</h2>
              <p>
                There are many things that go into getting your project online
                quickly, safely, and hassle-free. I&apos;m here to help with
                those too. I&apos;ll setup and manage your domain name, SSL
                certificates, and on-page SEO. I&apos;m also available for
                support via text, phone, email, video chat, and more! Let me
                take all the dirty work out of launching and maintaining your
                web application.
              </p>
              <ul className={"uk-list"}>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Domain Name
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  SSL Certificate
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Web Hosting
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  SEO
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Technical Support
                </li>
              </ul>
              <h2 id={"LTS"}>Long Term Support (LTS)</h2>
              <p>
                Even well-working machines need their oil changed. Web
                applications are just the same. They will need upgrades and
                security updates from time to time. You may even want to make
                minor changes occasionally. I&apos;ll keep your web application
                up-to-date with the latest technology and safe again security
                breaches. I&apos;ll even make minor updates as needed. Long term
                support will keep your technology fresh, your data safe, and
                your brand unique and desirable even after your web app
                development services are completed.
              </p>
              <ul className={"uk-list"}>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Managed domain and hosting
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  Productivity Tools
                </li>
                <li>
                  <i className="ri-check-fill uk-margin-right" />
                  1-3 FREE hours of updates a month (Not including new features)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
