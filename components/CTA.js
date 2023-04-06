import React from "react";
import Image from "next/image";
import Link from "next/link";

import isometric from "/images/isometrics/isometric-1-3-white.png";

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
                <h2>Your two consultations are now FREE!</h2>
                <div className={"uk-flex uk-flex-middle"}>
                  <Link
                    href={"https://cal.com/stupendousweb/consultation"}
                    className={
                      "uk-button uk-button-primary uk-button-large uk-margin-medium-right"
                    }
                  >
                    Get Yours Now
                  </Link>
                  <div className={"uk-text-large"}>
                    <a
                      href={"mailto:topher@stupendousweb.com"}
                      className={"uk-flex uk-margin-small-right"}
                      data-uk-tooltip={"Email me!"}
                    >
                      <i className={"ri-mail-fill"} />
                    </a>
                  </div>
                  <div className={"uk-text-large"}>
                    <a
                      href={"tel:5108906429"}
                      className={"uk-flex"}
                      data-uk-tooltip={"Call me!"}
                    >
                      <i className={"ri-phone-fill"} />
                    </a>
                  </div>
                </div>
                <p>
                  Find your audience, refine your product, and create solutions
                  for your customers in the first of your two free
                  consultations.
                </p>
              </div>
              <div>
                <Image src={isometric} alt={"Software Development Services"} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CTA;
