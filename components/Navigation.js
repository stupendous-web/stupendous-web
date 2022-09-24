import Transition from "./Transition";

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
                title={
                  link.title +
                  " | Web App Development Services | Stupendous Web"
                }
              >
                <Transition url={"/" + link.href}>{link.title}</Transition>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
