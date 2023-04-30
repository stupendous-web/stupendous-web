import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "./Logo";

import isometric11 from "../images/isometrics/isometric-1-1-white.png";
import isometric12 from "../images/isometrics/isometric-1-2-white.png";
import isometric21 from "../images/isometrics/isometric-2-1-white.png";
import isometric22 from "../images/isometrics/isometric-2-2-white.png";
import isometric23 from "../images/isometrics/isometric-2-3-white.png";

export default function Menu() {
  const [menuButtonClass, setMenuButtonClass] = useState("");
  const [closeButtonClass, setCloseButtonClass] = useState("uk-hidden");
  const [backgroundClass, setBackgroundClass] = useState("");
  const [isometricStyles, setIsometricStyles] = useState([1, 0, 0, 0, 0]);
  const [menuClass, setMenuClass] = useState("");

  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
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

  const showMenu = () => {
    setBackgroundClass("slide-in-right");
    setMenuClass("slide-in-right");
    setMenuButtonClass("uk-hidden");
    setCloseButtonClass("uk-visible");
  };

  const hideMenu = () => {
    setBackgroundClass("slide-out-right");
    setMenuClass("slide-out-right");
    setMenuButtonClass("uk-visible");
    setCloseButtonClass("uk-hidden");
  };

  const changeIsometric = (isometric) => {
    if (isometric === 0) {
      setIsometricStyles([1, 0, 0, 0, 0]);
    }
    if (isometric === 1) {
      setIsometricStyles([0, 1, 0, 0, 0]);
    }
    if (isometric === 2) {
      setIsometricStyles([0, 0, 1, 0, 0]);
    }
    if (isometric === 3) {
      setIsometricStyles([0, 0, 0, 1, 0]);
    }
    if (isometric === 4) {
      setIsometricStyles([0, 0, 0, 0, 1]);
    }
  };

  return (
    <>
      <div
        className={
          "uk-section-secondary uk-light uk-width-1-1 uk-grid-collapse uk-child-width-2-3@s " +
          menuClass
        }
        style={{
          position: "fixed",
          top: 0,
          left: "0",
          transform: "translate3d(100%,0,0)",
        }}
        data-uk-grid={""}
      >
        <div
          className={"uk-flex uk-flex-middle"}
          style={{ marginLeft: "1rem" }}
          data-uk-height-viewport={""}
        >
          <div className={"uk-width-1-1"} data-uk-grid={""}>
            <div className={"uk-width-1-4"}>
              <ul className={"uk-list"}>
                {socialLinks?.map((link) => (
                  <li key={link.href} className={"uk-margin-remove"}>
                    <Link
                      href={link.href}
                      title={`Find me on ${link.title}!`}
                      target={"_blank"}
                    >
                      <i className={link.icon} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={"uk-width-3-4"}>
              <ul className={"uk-list"}>
                {links.map((link, key) => {
                  return (
                    <li
                      key={key}
                      className={"uk-h1 uk-margin-remove"}
                      style={{ width: "fit-content" }}
                      onMouseEnter={() => changeIsometric(key + 1)}
                      onMouseLeave={() => changeIsometric(0)}
                    >
                      <Link
                        href={"/" + link.href}
                        title={
                          link.title +
                          " | Software Development Services | Stupendous Web"
                        }
                        onClick={() => hideMenu()}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "uk-background-primary uk-width-1-3 uk-height-viewport uk-flex uk-flex-center uk-flex-middle uk-visible@s " +
          backgroundClass
        }
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          transform: "translate3d(100%, 0, 0)",
        }}
      >
        <div className={"uk-width-1-1 uk-inline"}>
          <Image
            src={isometric11}
            alt={"Software Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[0] }}
          />
          <Image
            src={isometric12}
            alt={"Software Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[1] }}
          />
          <Image
            src={isometric21}
            alt={"Software Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[2] }}
          />
          <Image
            src={isometric22}
            alt={"Software Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[3] }}
          />
          <Image
            src={isometric23}
            alt={"Software Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[4] }}
          />
        </div>
      </div>
      <Logo />
      <h3
        className={"uk-margin-remove uk-light"}
        style={{ position: "fixed", top: "1.5rem", right: "1rem" }}
      >
        <div onClick={showMenu} className={menuButtonClass}>
          <a>
            <i className={"ri-menu-fill"} />
          </a>
        </div>
        <div onClick={hideMenu} className={closeButtonClass}>
          <a>
            <i className="ri-close-fill" />
          </a>
        </div>
      </h3>
    </>
  );
}
