import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

class CTA extends React.Component {
  render() {
    return (
      <>
        <div
          className={"uk-section uk-section-primary uk-flex uk-flex-middle"}
          data-uk-height-viewport={"offset-bottom: true"}
        >
          <div className={"uk-container uk-container-small"}>
            <div
              className={"uk-child-width-1-2@m uk-flex-middle"}
              data-uk-grid={""}
            >
              <div>
                <h2>Access Two FREE Consultations!</h2>
                <div className={"uk-flex-middle"} data-uk-grid={""}>
                  <div className={"uk-width-auto@s"}>
                    <a
                      href={
                        "https://calendly.com/stupendousweb/free-consultation"
                      }
                      className={"uk-button uk-button-primary uk-button-large"}
                    >
                      Start Yours Now
                    </a>
                  </div>
                  <div className={"uk-width-expand@s"}>
                    <a
                      href={"mailto:topher@stupendousweb.com"}
                      className={"uk-margin-small-right"}
                      data-uk-tooltip={"Email me!"}
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href={"tel:5109440331"} data-uk-tooltip={"Call me!"}>
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                  </div>
                </div>
                <p>
                  Every tribe needs a strong leader and people are ready to join
                  yours. So, give them the tools they need with my web app
                  development services today.
                </p>
              </div>
              <div>
                <img
                  src={"/images/isometrics/isometric-1-3-white.png"}
                  alt={"Web App Development Services"}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CTA;
