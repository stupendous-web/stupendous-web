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
      className={"uk-navbar-container uk-navbar-transparent uk-visible@s"}
      data-uk-navbar={""}
    >
      <div className={"uk-navbar-center"}>
        <ul className={"uk-navbar-nav"}>
          {/*
          <li className={"uk-margin-large-right"}>
            <a href={""}>Solutions</a>
            <div className={"uk-navbar-dropdown"}>asdf</div>
          </li>*/}
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
