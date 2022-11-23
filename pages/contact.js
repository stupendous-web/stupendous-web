import Head from "next/head";
import Image from "next/image";
import { useGlobal } from "../lib/context";

import isometric from "../images/isometrics/isometric-2-3.png";
import HeadData from "../components/HeadData";

export default function Contact() {
  const { setLoading } = useGlobal();

  const links = [
    {
      title: "Book your FREE consultation",
      href: "https://calendly.com/stupendousweb/free-consultation",
      icon: "ri-calendar-fill",
    },
    {
      title: "topher@stupendousweb.com",
      href: "mailto:topher@stupendousweb.com",
      icon: "ri-mail-fill",
    },
    {
      title: "+1 510.944.0331 (Call or Text!)",
      href: "tel:5109440331",
      icon: "ri-phone-fill",
    },
    {
      title: "Client 1-1",
      href: "https://calendly.com/stupendousweb/client-1-1",
      icon: "ri-vidicon-fill",
    },
    {
      title: "Feature Requests",
      href: "https://stupendousweb.atlassian.net/jira/projects",
      icon: "ri-tools-fill",
    },
    {
      title: "Analytics",
      href: "https://stupendousanalytics.com",
      icon: "ri-pie-chart-fill",
    },
    {
      title: "Content Management",
      href: "https://wordpress.com",
      icon: "ri-file-text-fill",
    },
  ];

  return (
    <>
      <Head>
        <title>Contact | Web App Development Services | Stupendous Web</title>
        <HeadData
          title={"Contact | Web App Development Services | Stupendous Web"}
        />
      </Head>
      <div className={"uk-section uk-section-xlarge uk-padding-remove-bottom"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-flex-middle"} data-uk-grid={""}>
            <div className={"uk-width-1-3@s uk-visible@s"}>
              <Image
                src={isometric}
                alt={"Web App Development Services"}
                priority
                onLoadingComplete={setLoading(false)}
              />
            </div>
            <div className={"uk-width-2-3@s"}>
              <p className={"uk-text-justify uk-dropcap monospace"}>
                Let&apos;s discuss your goals. Get in touch below or schedule
                your 2 FREE consultations. After your consultation you&apos;ll
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
                      <a className={"uk-flex uk-flex-middle"} href={link.href}>
                        <i className={`${link.icon} uk-margin-right`} />
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
