import Link from "next/link";

export default function Navigation() {
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
          {links.map((link, key) => {
            return (
              <li
                className={
                  key < links.length - 1 ? "uk-margin-large-right" : undefined
                }
                key={key}
              >
                <Link href={"/" + link.href} legacyBehavior>
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
