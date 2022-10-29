import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faHeart,
  faDog,
  faGavel,
  faCamera,
  faBriefcase,
  faBitcoinSign,
  faStethoscope,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
  ];

  const industries = [
    { title: "Healthcare", icon: faStethoscope },
    { title: "Art and Design", icon: faPenNib },
    { title: "Pet Care", icon: faDog },
    { title: "Photography", icon: faCamera },
    { title: "Social Media", icon: faHashtag },
    { title: "Health and Fitness", icon: faHeart },
    { title: "Legal", icon: faGavel },
    { title: "Business", icon: faBriefcase },
    { title: "Crypto and NFT's", icon: faBitcoinSign },
  ];

  return (
    <nav
      className={
        "uk-width-1-1 uk-navbar-container uk-navbar-transparent uk-position-top uk-visible@s"
      }
      data-uk-navbar={""}
    >
      <div className={"uk-navbar-center"}>
        <ul className={"uk-navbar-nav"}>
          <div className="uk-inline">
            <div data-uk-dropdown="mode: click"></div>
          </div>
          <li className={"uk-margin-large-right"}>
            <a
              title={
                "Solutions | Web App Development Services | Stupendous Web"
              }
            >
              Solutions
            </a>
            <div data-uk-dropdown={"pos: bottom-center"}>
              <div
                className={
                  "uk-width-2xlarge uk-dropdown-grid uk-grid-small uk-child-width-1-3@s"
                }
                data-uk-grid={""}
              >
                {industries.map((industry, key) => (
                  <div key={key}>
                    <p>
                      <FontAwesomeIcon icon={industry.icon} />
                      <span className={"uk-margin-left"}>{industry.title}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {links.map((link, key) => {
            return (
              <li
                className={key < links.length && "uk-margin-large-right"}
                key={key}
              >
                <Link href={"/" + link.href}>
                  <a
                    title={
                      link.title +
                      " | Web App Development Services | Stupendous Web"
                    }
                  >
                    {link.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
