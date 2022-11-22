import Link from "next/link";
import { useGlobal } from "../lib/context";
import CTA from "../components/CTA";

export default function Footer() {
  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
    { href: "philosophy", title: "Philosophy" },
    { href: "2022", title: "2022" },
    { href: "partners", title: "Partners" },
    { href: "articles", title: "Articles" },
  ];

  const projects = [
    { href: "https://stupendouscms.com", title: "Stupendous CMS" },
    {
      href: "https://stupendousanalytics.com",
      title: "Stupendous Analytics",
    },
  ];

  const { articles } = useGlobal();

  return (
    <>
      <CTA />
      <div className={"uk-section uk-section-muted uk-section-xsmall"}>
        <div className={"uk-container uk-container-small uk-text-small"}>
          <div data-uk-grid={""}>
            <div className={"uk-width-1-4@s"}>
              <ul className={"uk-nav uk-nav-default"}>
                <li className={"uk-nav-header"}>Resources</li>
                {links.map((link, key) => {
                  return (
                    <li key={key}>
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
                <li className={"uk-nav-header"}>Tools</li>
                {projects.map((link, key) => {
                  return (
                    <li key={key}>
                      <Link href={link.href} legacyBehavior>
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
            <div className={"uk-width-1-4@s"}>
              <ul className={"uk-nav uk-nav-default"}>
                <li className={"uk-nav-header"}>Recent</li>
                {articles?.slice(0, 4).map((article) => {
                  return (
                    <li key={article?.id}>
                      <Link href={"/articles/" + article?.slug} legacyBehavior>
                        <a
                          title={
                            article?.title +
                            " | Web App Development Services | Stupendous Web"
                          }
                        >
                          {article?.title}
                        </a>
                      </Link>
                    </li>
                  );
                })}
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
                  <a
                    className={"uk-margin-small-right"}
                    href={"https://www.linkedin.com/in/topherjamesknoll"}
                  >
                    <i className="ri-linkedin-fill" />
                  </a>
                  <a
                    className={"uk-margin-small-right"}
                    href={"https://instagram.com/stupendousweb_"}
                  >
                    <i className="ri-instagram-fill" />
                  </a>
                  <a
                    className={"uk-margin-small-right"}
                    href={"https://twitter.com/stupendousweb"}
                  >
                    <i className="ri-twitter-fill" />
                  </a>
                  <a href={"https://facebook.com/stupendousweb"}>
                    {" "}
                    <i className="ri-facebook-fill" />
                  </a>
                </p>
                <div className={"uk-margin uk-text-muted"}>
                  <div>
                    &copy; Copyright{" "}
                    <Link href={"/"} legacyBehavior>
                      <a
                        title={
                          "Web App Development Services | Stupendous Web | If you want to build community, build a stupendous web app"
                        }
                      >
                        Stupendous Web
                      </a>
                    </Link>{" "}
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
