import CTA from "../components/CTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
    { href: "2022", title: "2022" },
    { href: "partners", title: "Partners" },
    { href: "articles", title: "Articles" },
  ];

  return (
    <>
      <CTA />
      <div className={"uk-section uk-section-secondary uk-section-xsmall"}>
        <div className={"uk-container uk-container-small uk-text-small"}>
          <div data-uk-grid={""}>
            <div className={"uk-width-1-4@s"}>
              <ul className={"uk-nav uk-nav-default"}>
                <li className={"uk-nav-header"}>Resources</li>
                {links.map((link, key) => {
                  return (
                    <li key={key}>
                      <a
                        href={"/" + link.href}
                        title={
                          link.title +
                          " | Web App Development Services | Stupendous Web"
                        }
                      >
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={"uk-width-1-4@s"}>
              <ul className={"uk-nav uk-nav-default"}>
                <li className={"uk-nav-header"}>Projects</li>
                <li>
                  <a
                    href={"https://analytics.stupendousweb.com"}
                    title={
                      "Next JS Analytics by Stupendous Web | Web App Development Services | Stupendous Web"
                    }
                  >
                    Next JS Analytics
                  </a>
                </li>
                <li>
                  <a
                    href={"https://trade.stupendousweb.com"}
                    title={
                      "Trade by Stupendous Web | Web App Development Services | Stupendous Web"
                    }
                  >
                    Trade
                  </a>
                </li>
              </ul>
            </div>
            <div className={"uk-width-1-2@s uk-flex-middle"}>
              <div>
                <p>
                  <a
                    href={"mailto:topher@stupendousweb.com"}
                    style={{ fontSize: "1rem" }}
                  >
                    topher@stupendousweb.com
                  </a>
                </p>
                <p>
                  <a href={"https://www.linkedin.com/in/topherjamesknoll"}>
                    <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                  </a>
                  <a href={"https://instagram.com/stupendousweb_"}>
                    <FontAwesomeIcon icon={faInstagram} fixedWidth />
                  </a>
                  <a href={"https://twitter.com/stupendousweb"}>
                    <FontAwesomeIcon icon={faTwitter} fixedWidth />
                  </a>
                  <a href={"https://facebook.com/stupendousweb"}>
                    <FontAwesomeIcon icon={faFacebook} fixedWidth />
                  </a>
                </p>
                <div className={"uk-margin uk-text-muted"}>
                  <div>
                    &copy; Copyright{" "}
                    <a
                      href={"/"}
                      title={
                        "Web App Development Services | Stupendous Web | If you want to build community, build a stupendous web app"
                      }
                    >
                      Stupendous Web Marketing LLC
                    </a>{" "}
                    2022.
                  </div>
                  <div>All rights reserved. Made in Oakland</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
