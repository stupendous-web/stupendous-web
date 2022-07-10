export default function Navigation() {
  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
  ];
  return (
    <div className={"uk-position-top-center"}>
      <ul className={"uk-subnav uk-visible@s"} style={{ paddingTop: "2rem" }}>
        {links.map((link, key) => {
          return (
            <li className={"uk-margin-large-right"} key={key}>
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
  );
}
