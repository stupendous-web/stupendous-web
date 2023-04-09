import Link from "next/link";
import { useGlobal } from "../lib/context";

export default function Navigation() {
  const { services } = useGlobal();
  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
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
          <div className={"uk-inline"}>
            <div data-uk-dropdown="mode: click"></div>
          </div>
          {links.map((link, key) => (
            <li
              className={
                key < links.length - 1 ? "uk-margin-large-right" : undefined
              }
              key={key}
            >
              <Link
                href={"/" + link.href}
                title={
                  link.title +
                  " | Software Development Services | Stupendous Web"
                }
              >
                {link.title}
              </Link>
              {link.title === "Services" && (
                <div data-uk-dropdown={""}>
                  <ul className={"uk-nav uk-dropdown-nav"}>
                    {services.map((service) => (
                      <li key={service.target}>
                        <Link
                          href={`/services#${service.target}`}
                          title={
                            service.longTitle +
                            " | Software Development Services | Stupendous Web"
                          }
                        >
                          {service.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
