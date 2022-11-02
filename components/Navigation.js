import Link from "next/link";

export default function Navigation() {
  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
  ];

  const industries = [
    { title: "Healthcare", icon: "medication" },
    { title: "Art and Design", icon: "brush" },
    { title: "Pet Care", icon: "pets" },
    { title: "Photography", icon: "photo_camera" },
    { title: "Health and Fitness", icon: "favorite" },
    { title: "Social Media Apps", icon: "tag" },
    { title: "Business", icon: "work" },
    { title: "Legal", icon: "gavel" },
    { title: "Crypto and NFT's", icon: "currency_bitcoin" },
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
                    <p className={"uk-flex uk-flex-middle"}>
                      <span className={"material-symbols-sharp"}>
                        {industry.icon}
                      </span>
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
