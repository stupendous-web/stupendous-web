import Link from "next/link";

export default function Navigation() {
  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
  ];

  const industries = [
    {
      title: "Healthcare",
      icon: "ri-stethoscope-fill",
      href: "articles/why-you-need-a-web-app-as-a-healthcare-professional",
    },
    {
      title: "Photography",
      icon: "ri-camera-fill",
      href: "articles/three-ways-photographers-can-use-online-technology-to-market-themselves",
    },
    {
      title: "Health and Fitness",
      icon: "ri-heart-fill",
      href: "articles/how-personal-fitness-trainers-can-use-online-technology-to-market-themselves",
    },
    {
      title: "Business",
      icon: "ri-briefcase-fill",
      href: "articles/building-a-custom-web-application-4-ways-your-business-will-benefit",
    },
    // { title: "Crypto and NFT's", icon: "ri-bit-coin-fill", href: "" },
    // { title: "Art and Design", icon: "ri-brush-fill", href: "" },
    // { title: "Social Media Apps", icon: "ri-hashtag", href: "" },
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
                  "uk-width-xlarge uk-dropdown-grid uk-grid-small uk-child-width-1-2@s"
                }
                data-uk-grid={""}
              >
                {industries.map((industry, key) => (
                  <div key={key}>
                    <p className={"uk-flex uk-flex-middle"}>
                      <Link href={industry.href}>
                        <a title={industry.title}>
                          <i className={industry.icon} />
                          <span className={"uk-margin-left"}>
                            {industry.title}
                          </span>
                        </a>
                      </Link>
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
