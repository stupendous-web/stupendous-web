import React, { useState } from "react";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
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
  return (
    <>
      <Navigation />
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
        uk-grid={""}
      >
        <div
          className={"uk-flex uk-flex-middle"}
          style={{ marginLeft: "1rem" }}
          uk-height-viewport={""}
        >
          <div className={"uk-width-1-1"} uk-grid={""}>
            <div className={"uk-width-1-3"}>
              <ul className={"uk-list"} style={{ marginTop: "9px" }}>
                <li className={"uk-margin-remove"}>
                  <a
                    href={"https://www.linkedin.com/in/topherjamesknoll"}
                    target={"_blank"}
                    rel={"nofollow noreferrer"}
                  >
                    <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                  </a>
                </li>
                <li className={"uk-margin-remove"}>
                  <a
                    href={"https://instagram.com/stupendousweb_"}
                    target={"_blank"}
                    rel={"nofollow noreferrer"}
                  >
                    <FontAwesomeIcon icon={faInstagram} fixedWidth />
                  </a>
                </li>
                <li className={"uk-margin-remove"}>
                  <a
                    href={"https://twitter.com/stupendousweb"}
                    target={"_blank"}
                    rel={"nofollow noreferrer"}
                  >
                    <FontAwesomeIcon icon={faTwitter} fixedWidth />
                  </a>
                </li>
                <li className={"uk-margin-remove"}>
                  <a
                    href={"https://facebook.com/stupendousweb"}
                    target={"_blank"}
                    rel={"nofollow noreferrer"}
                  >
                    <FontAwesomeIcon icon={faFacebook} fixedWidth />
                  </a>
                </li>
              </ul>
            </div>
            <div className={"uk-width-2-3"}>
              <ul className={"uk-list"}>
                <li
                  className={"uk-h1 uk-margin-remove-bottom"}
                  onMouseEnter={() => changeIsometric(1)}
                  onMouseLeave={() => changeIsometric(0)}
                >
                  <a
                    href={"/projects"}
                    title={
                      "Projects | Web App Development Services | Stupendous Web"
                    }
                  >
                    Projects
                  </a>
                </li>
                <li
                  className={"uk-h1 uk-margin-remove"}
                  onMouseEnter={() => changeIsometric(2)}
                  onMouseLeave={() => changeIsometric(0)}
                >
                  <a
                    href={"/about"}
                    title={
                      "About | Web App Development Services | Stupendous Web"
                    }
                  >
                    About
                  </a>
                </li>
                <li
                  className={"uk-h1 uk-margin-remove"}
                  onMouseEnter={() => changeIsometric(3)}
                  onMouseLeave={() => changeIsometric(0)}
                >
                  <a
                    href={"/contact"}
                    title={
                      "Contact | Web App Development Services | Stupendous Web"
                    }
                  >
                    Contact
                  </a>
                </li>
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
          transform: "translate3d(100%,0,0)",
        }}
      >
        <div className={"uk-width-1-1 uk-inline"}>
          <img
            src={"/images/isometrics/isometric-2-3.png"}
            alt={"Web App Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[0] }}
          />
          <img
            src={"/images/isometrics/isometric-3-1.png"}
            alt={"Web App Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[1] }}
          />
          <img
            src={"/images/isometrics/isometric-3-2.png"}
            alt={"Web App Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[2] }}
          />
          <img
            src={"/images/isometrics/isometric-3-3.png"}
            alt={"Web App Development Services"}
            className={"uk-position-center uk-padding-large"}
            style={{ opacity: isometricStyles[3] }}
          />
        </div>
      </div>
      <a
        href={"/"}
        title={
          "Web App Development Services | Stupendous Web | If you want to build community, build a stupendous web app"
        }
        className={"uk-background-primary"}
        style={{
          height: "5rem",
          width: "4rem",
          position: "fixed",
          top: 0,
          left: "1rem",
        }}
      >
        <img
          src={"/images/logo.png"}
          alt={"Web App Development Services"}
          className={"uk-margin-top"}
        />
      </a>
      <div style={{ position: "fixed", top: "30px", right: "30px" }}>
        <div onClick={showMenu} className={menuButtonClass}>
          <a>
            <FontAwesomeIcon icon={faBars} size={"2x"} />
          </a>
        </div>
        <div onClick={hideMenu} className={closeButtonClass}>
          <a>
            <FontAwesomeIcon icon={faClose} size={"2x"} />
          </a>
        </div>
      </div>
    </>
  );
}
