import React, { useState } from "react";
import { useRouter } from "next/router";

import Logo from "./Logo";

export default function Menu() {
  const links = [
    { href: "projects", title: "Projects" },
    { href: "about", title: "About" },
    { href: "services", title: "Services" },
    { href: "contact", title: "Contact" },
  ];
  const [menuButtonClass, setMenuButtonClass] = useState("");
  const [closeButtonClass, setCloseButtonClass] = useState("uk-hidden");
  const [backgroundClass, setBackgroundClass] = useState("");
  const [isometricStyles, setIsometricStyles] = useState([1, 0, 0, 0, 0]);
  const [menuClass, setMenuClass] = useState("");

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

  const router = useRouter();

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
            <div className={"uk-width-1-3"}>
              <ul className={"uk-list"} style={{ marginTop: "9px" }}>
                <li className={"uk-margin-remove"}>
                  <a href={"https://www.linkedin.com/in/topherjamesknoll"}>
                    <i className="ri-linkedin-fill" />
                  </a>
                </li>
                <li className={"uk-margin-remove"}>
                  <a href={"https://instagram.com/stupendousweb_"}>
                    {" "}
                    <i className="ri-instagram-fill" />
                  </a>
                </li>
                <li className={"uk-margin-remove"}>
                  <a href={"https://twitter.com/stupendousweb"}>
                    {" "}
                    <i className="ri-twitter-fill" />
                  </a>
                </li>
                <li className={"uk-margin-remove"}>
                  <a href={"https://facebook.com/stupendousweb"}>
                    {" "}
                    <i className="ri-facebook-fill" />
                  </a>
                </li>
              </ul>
            </div>
            <div className={"uk-width-2-3"}>
              <ul className={"uk-list"}>
                {links.map((link, key) => {
                  return (
                    <li
                      key={key}
                      className={"uk-h1 uk-margin-remove"}
                      onMouseEnter={() => changeIsometric(key + 1)}
                      onMouseLeave={() => changeIsometric(0)}
                    >
                      <a
                        title={
                          link.title +
                          " | Web App Development Services | Stupendous Web"
                        }
                        onClick={() => {
                          router.push("/" + link.href);
                          hideMenu();
                        }}
                      >
                        {link.title}
                      </a>
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
          <img
            src={"/images/isometrics/isometric-1-1-white.png"}
            alt={"Web App Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[0] }}
          />
          <img
            src={"/images/isometrics/isometric-1-2-white.png"}
            alt={"Web App Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[1] }}
          />
          <img
            src={"/images/isometrics/isometric-2-1-white.png"}
            alt={"Web App Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[2] }}
          />
          <img
            src={"/images/isometrics/isometric-2-2-white.png"}
            alt={"Web App Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[3] }}
          />
          <img
            src={"/images/isometrics/isometric-2-3-white.png"}
            alt={"Web App Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[4] }}
          />
        </div>
      </div>
      <Logo />
      <h3
        className={"uk-margin-remove"}
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
