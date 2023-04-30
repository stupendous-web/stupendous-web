import Link from "next/link";

export default function Contact() {
  const links = [
    {
      tooltip: "+1 510.890.6429 (Call or Text!)",
      title: "Call me!",
      href: "tel:5108906429",
      icon: "ri-phone-fill",
    },
    {
      tooltip: "topher@stupendousweb.com",
      title: "Email me!",
      href: "mailto:topher@stupendousweb.com",
      icon: "ri-mail-fill",
    },
  ];

  return (
    <>
      <div
        className={"uk-text-right uk-position-fixed uk-padding"}
        style={{ bottom: 0, right: 0 }}
      >
        {links.map((link) => {
          return (
            <div className={"uk-text-large"} key={link.href}>
              <span data-uk-tooltip={`title: ${link.tooltip}; pos: left`}>
                <Link href={link.href} title={link.title}>
                  <i className={link.icon} />
                </Link>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
