import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/projects", title: "Projects" },
    { href: "/about", title: "About" },
    { href: "/services", title: "Services" },
    { href: "/contact", title: "Contact" },
    { href: "/2022", title: "2022 Review" },
    { href: "/articles", title: "Articles" },
    { href: "https://stupendousanalytics.com", title: "Stupendous Analytics" },
  ];

  const socialLinks = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/topherjamesknoll",
      icon: "ri-linkedin-fill",
    },
    {
      title: "Instagram",
      href: "https://instagram.com/stupendousweb_",
      icon: "ri-instagram-fill",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/stupendousweb",
      icon: "ri-twitter-fill",
    },
    {
      title: "Facebook",
      href: "https://facebook.com/stupendousweb",
      icon: "ri-facebook-fill",
    },
    {
      title: "GitHub",
      href: "https://github.com/stupendous-web",
      icon: "ri-github-fill",
    },
    {
      title: "Spotify",
      href: "https://open.spotify.com/user/128910259",
      icon: "ri-spotify-fill",
    },
  ];

  return (
    <>
      <div className={"uk-section uk-section-muted uk-section-xsmall"}>
        <div className={"uk-container uk-container-small uk-text-small"}>
          <div className={"uk-child-width-1-2@s"} data-uk-grid={""}>
            <div>
              <ul className={"uk-nav uk-nav-default uk-column-1-2@s"}>
                {links.map((link, key) => (
                  <li key={key}>
                    <Link
                      href={link.href}
                      title={
                        link.title +
                        " | Software Development Services | Stupendous Web"
                      }
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
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
                  {socialLinks?.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      title={`Find me on ${link.title}!`}
                      target={"_blank"}
                      className={"uk-margin-small-right"}
                    >
                      <i className={link.icon} />
                    </Link>
                  ))}
                </p>
                <div className={"uk-margin uk-text-muted"}>
                  <div>
                    &copy; Copyright{" "}
                    <Link
                      href={"/"}
                      title={
                        "Software Development Services | Stupendous Web | If you want to build community, build stupendous software"
                      }
                    >
                      Stupendous Web
                    </Link>{" "}
                    2022. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
