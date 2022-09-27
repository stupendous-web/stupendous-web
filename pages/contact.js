import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faEnvelope,
  faPhone,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

import isometric from "../images/isometrics/isometric-2-3.png";

export default function Contact() {
  const links = [
    {
      title: "Book your FREE consultation",
      href: "https://calendly.com/stupendousweb/free-consultation",
      icon: faVideo,
    },
    {
      title: "topher@stupendousweb.com",
      href: "mailto:topher@stupendousweb.com",
      icon: faEnvelope,
    },
    {
      title: "+1 510.210.0889 (Call or Text!)",
      href: "tel:5102100889",
      icon: faPhone,
    },
    {
      title: "Client 1-1",
      href: "https://calendly.com/stupendousweb/client-1-1",
      icon: faVideo,
    },
    {
      title: "Feature Requests",
      href: "https://plan.toggl.com/#timeline",
      icon: faWrench,
    },
  ];

  return (
    <>
      <Head>
        <title>Contact | Web App Development Services | Stupendous Web</title>
      </Head>
      <div className={"uk-section uk-section-xlarge uk-padding-remove-bottom"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-flex-middle"} data-uk-grid={""}>
            <div className={"uk-width-1-3@s uk-visible@s"}>
              <Image src={isometric} alt={"Web App Development Services"} />
            </div>
            <div className={"uk-width-2-3@s"}>
              <p className={"uk-text-justify uk-dropcap"}>
                Let&apos;s discuss your goals. Get in touch below or schedule
                your FREE consultation. After your consultation you&apos;ll
                receive a creative brief, project plan, and secret website where
                you can preview your project. Lastly, we&apos;ll launch your web
                app development services to the internet!
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
            Contact
          </h1>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-small"}>
          <div data-uk-grid={""}>
            <div className={"uk-width-1-3@s"} />
            <div className={"uk-width-2-3@s"}>
              <ul className={"uk-list uk-list-divider"}>
                {links.map((link, key) => {
                  return (
                    <li key={key}>
                      <a href={link.href}>
                        <FontAwesomeIcon
                          icon={link.icon}
                          fixedWidth
                          className={"uk-margin-small-right"}
                        />
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
