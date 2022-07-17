import { useEffect } from "react";
import Head from "next/head";
import imagesloaded from "imagesloaded";
import { useLoading } from "../lib/context";

export default function Services() {
  const { setLoading } = useLoading();
  useEffect(() => {
    imagesloaded(document, () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Services | Web App Development Services | Stupendous Web</title>
      </Head>
      <div className={"uk-section uk-section-xlarge uk-padding-remove-bottom"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-flex-middle"} uk-grid={""}>
            <div className={"uk-width-1-3@s uk-visible@s"}>
              <img
                src={"/images/isometrics/isometric-2-2.png"}
                alt={"Web App Development Services"}
              />
            </div>
            <div className={"uk-width-2-3@s"}>
              <p className={"uk-text-justify uk-dropcap"}>
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
            uk-parallax={"x: 0, -800"}
          >
            Services
          </h1>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-small"}>
          <div uk-grid={""}>
            <div className={"uk-width-1-3@s"} />
            <div className={"uk-width-2-3@s"}>
              <p>
                Your project is more than just a pretty website. My web app
                development services are more comprehensive. I&apos;m focused on
                launching a project for you that excels your brand. I&apos;m
                going to build you a top-of-the-line web application, give it a
                place on the web so your community can find it and connect with
                you, and maintain the project even after it&apos;s done.
              </p>
              <h2>Web App Development Services</h2>
              <p>
                Building a community is probably one of your highest goals. It
                can be challenging, but the internet is a good place to start. I
                can help you engage with your audiences through website and web
                app development services. We&apos;ll work together to start a
                project that helps you achieve your goals best. With the latest
                technologies, the possibilities are endless, but here are a few
                things we can build to help you build community:
              </p>
              <ul className={"uk-list uk-list-disc"}>
                <li>Websites</li>
                <li>E-Commerce</li>
                <li>Web Portals</li>
                <li>Content Management Systems (CMS)</li>
                <li>Social Media</li>
                <li>Discussion Forums</li>
                <li>Email</li>
                <li>Chat Rooms</li>
                <li>Image Editors</li>
              </ul>
              <h2>Secure Managed Domain and Hosting</h2>
              <p>
                There are many things that go into getting your project online
                quickly, safely, and hassle-free. I&apos;m here to help with
                those too. I&apos;ll setup and manage your domain name, SSL
                certificates, and on-page SEO. I&apos;m also available for
                support via text, phone, email, video chat, and more! When you
                sign up for my web app development services, you&apos;ll receive
                all this for a small monthly charge. Let me take all the dirty
                work out of launching and maintaining your web application.
              </p>
              <ul className={"uk-list uk-list-disc"}>
                <li>Domain Name</li>
                <li>SSL Certificate</li>
                <li>Web Hosting</li>
                <li>SEO</li>
                <li>Technical Support</li>
              </ul>
              <h2>Long Term Support (LTS)</h2>
              <p>
                Even well-working machines need their oil changed from time to
                time. Web applications are just the same. They will need
                upgrades and security updates from time to time. You may even
                want to make minor changes occasionally. I&apos;ll keep your web
                application up-to-date with the latest technology and safe again
                security breaches. I&apos;ll even make minor updates as needed.
                Long term support will keep your technology fresh, your data
                safe, and your brand unique and desirable even after your web
                app development services are completed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
