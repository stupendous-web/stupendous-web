import Head from "next/head";
import Image from "next/image";
import HeadData from "../components/HeadData";
import { useGlobal } from "../lib/context";
import "devicon";

import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";

import isometric from "../images/isometrics/isometric-1-2.png";

export default function Home() {
  const { setLoading } = useGlobal();

  return (
    <>
      <Head>
        <title>
          Web App Development Services | Stupendous Web | If you want to build
          community, build a stupendous web app
        </title>
        <HeadData
          title={
            "Web App Development Services | Stupendous Web | If you want to build community, build a stupendous web app"
          }
        />
      </Head>
      <div
        className={
          "uk-section uk-section-xlarge uk-flex uk-flex-center uk-flex-middle"
        }
        data-uk-height-viewport={""}
      >
        <div className={"uk-width-1-1"}>
          <div className={"uk-container"}>
            <div className={"uk-flex-middle"} data-uk-grid={""}>
              <div className={"uk-width-2-3@s"}>
                <h1>Web App Development Services</h1>
                <p className={"uk-flex uk-flex-middle"}>
                  <a
                    href={
                      "https://calendly.com/stupendousweb/free-consultation"
                    }
                    className={
                      "uk-button uk-button-primary uk-button-large uk-margin-small-right"
                    }
                  >
                    Start Yours Now
                  </a>
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
                      href={"tel:5109440331"}
                      className={"uk-flex"}
                      data-uk-tooltip={"Call me!"}
                    >
                      <i className={"ri-phone-fill"} />
                    </a>
                  </div>
                </p>
                <p>
                  I help people with something to share who want to engage with
                  their community by delivering web app development services
                  that improve their brand awareness and authority.
                </p>
              </div>
              <div className={"uk-width-1-3@s"}>
                <Image
                  src={isometric}
                  alt={"Web App Development Services"}
                  priority
                  onLoadingComplete={setLoading(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <p className={"uk-h1"}>
            If you want to build community, build a stupendous web app.
          </p>
          <p>
            [topher@stupendous ~]$ <span className={"flash"}>▌</span>
          </p>
        </div>
      </div>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <p
            className={
              "uk-width-1-2@s uk-padding-large uk-padding-remove-horizontal"
            }
          >
            I build engaging web apps. Together we can create you a website,
            broaden your digital presence, and build stronger internet
            community.
          </p>
        </div>
        <div className={"uk-container uk-container-expand"}>
          <div
            className={"uk-child-width-1-4 uk-margin-large"}
            data-uk-grid={""}
            data-uk-parallax={"x: 50%, -100%"}
          >
            <div>
              <img
                src={"/images/projects/pixel-shop.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
            <div>
              <img
                src={"/images/projects/power-trip-fitness.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
            <div>
              <img
                src={"/images/projects/rad-training.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
            <div>
              <img
                src={"/images/projects/security-engineers.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
          </div>
          <div
            className={"uk-child-width-1-5 uk-margin-large"}
            data-uk-grid={""}
            data-uk-parallax={"x: 50%, -100%"}
          >
            <div>
              <img
                src={"/images/projects/brontez-purnell.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
            <div>
              <img
                src={"/images/projects/denvers-cupid.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
            <div>
              <img
                src={"/images/projects/deriddle.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
            <div>
              <img
                src={"/images/projects/grace-avila.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
            <div>
              <img
                src={"/images/projects/iwannabe-fit.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
          </div>
          <div
            className={"uk-child-width-1-4 uk-margin-large"}
            data-uk-grid={""}
            data-uk-parallax={"x: 50%, -100%"}
          >
            <div>
              <img
                src={"/images/projects/j-fitness.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
            <div>
              <img
                src={"/images/projects/kendra-hicks.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
            <div>
              <img
                src={"/images/projects/lp-solutions.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
            <div>
              <img
                src={"/images/projects/lucky-artists.jpg"}
                alt={"Web App Development Services"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <h2>Everything for Everyone</h2>
          <ul className={"uk-subnav uk-subnav-pill"} data-uk-switcher={""}>
            <li>
              <a href={"#"}>Hosting</a>
            </li>
            <li>
              <a href={"#"}>Support</a>
            </li>
            <li>
              <a href={"#"}>SEO</a>
            </li>
          </ul>
          <ul className={"uk-switcher"}>
            <li>
              Don&apos;t know what a server is? No problem! Let me take care of
              all the technical work getting you, your brand, and your message
              online with my web app development services. Your website hosting
              will be fully managed. Your website will be fast and secure. And,
              best of all, you don&apos;t have to do a thing!.
            </li>
            <li>
              Let&apos;s get this right! We&apos;ll work closely together to
              make your website perfect as part of my web app development
              services. I&apos;m available via email, phone, or video chat. You
              can email me anytime with your required updates and concerns or
              tell me via a video call. I&apos;m always here.
            </li>
            <li>
              Search engine optimization plays an important role in getting your
              product to your audiences. So, let&apos;s keep your website up to
              date with the latest SEO. Your website will be optimized for
              on-page SEO. My web app development services include pulling all
              the stops to getting your website to appear correctly in search
              engines like Google. Let&apos;s work some magic!
            </li>
          </ul>
        </div>
      </div>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <div
            className={"uk-position-relative uk-visible-toggle"}
            tabIndex={"-1"}
            data-uk-slideshow={
              "autoplay: true; autoplay-interval: 5000; pause-on-hover: false"
            }
          >
            <ul className={"uk-slideshow-items"}>
              <li>
                <img
                  src={"/images/domains/business.jpg"}
                  alt={"Web App Development Services"}
                  className={"uk-cover"}
                />
                <div
                  className={
                    "uk-position-center uk-position-small uk-text-center uk-light"
                  }
                >
                  <p className={"uk-heading-medium uk-margin-remove"}>
                    .business
                  </p>
                  <p className={"uk-margin-remove"}>
                    hello@your-domain.business
                  </p>
                </div>
              </li>
              <li>
                <img
                  src={"/images/domains/pictures.jpg"}
                  alt={"Web App Development Services"}
                  className={"uk-cover"}
                />
                <div
                  className={
                    "uk-position-center uk-position-small uk-text-center uk-light"
                  }
                >
                  <p className={"uk-heading-medium uk-margin-remove"}>
                    .pictures
                  </p>
                  <p className={"uk-margin-remove"}>
                    hello@your-domain.pictures
                  </p>
                </div>
              </li>
              <li>
                <img
                  src={"/images/domains/org.jpg"}
                  alt={"Web App Development Services"}
                  className={"uk-cover"}
                />
                <div
                  className={
                    "uk-position-center uk-position-small uk-text-center uk-light"
                  }
                >
                  <p className={"uk-heading-medium uk-margin-remove"}>.org</p>
                  <p className={"uk-margin-remove"}>hello@your-domain.org</p>
                </div>
              </li>
              <li>
                <img
                  src={"/images/domains/fans.jpg"}
                  alt={"Web App Development Services"}
                  className={"uk-cover"}
                />
                <div
                  className={
                    "uk-position-center uk-position-small uk-text-center uk-light"
                  }
                >
                  <p className={"uk-heading-medium uk-margin-remove"}>.fans</p>
                  <p className={"uk-margin-remove"}>hello@your-domain.fans</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <div className={"uk-child-width-1-2@s"} data-uk-grid={""}>
            <div>
              <p className={"uk-margin-remove"}>eCommerce</p>
              <h2 className={"uk-margin-remove-top"}>Accept Payments</h2>
              <p>
                Let&apos;s keep your work sustainable. My web app development
                services integrate with your{" "}
                <a
                  href={"https://stripe.com/payments"}
                  title={"Stripe Payments"}
                  target={"_blank"}
                  rel={"nofollow noreferrer"}
                >
                  Stripe
                </a>{" "}
                and{" "}
                <a
                  href={"https://www.paypal.com/us/business/accept-payments"}
                  title={"Paypal Payments"}
                  target={"_blank"}
                  rel={"nofollow noreferrer"}
                >
                  Paypal
                </a>{" "}
                accounts. Let your web app make you money so you can focus on
                your work.
              </p>
            </div>
            <div>
              <p className={"uk-margin-remove"}>Analytics</p>
              <h2 className={"uk-margin-remove-top"}>Find Customers</h2>
              <p>
                My custom web app development services come with cutomized
                analytics at no extra charge. Learn more about your current
                audience and discover new ones with analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-small"}>
          <p className={"uk-margin-remove"}>Web Apps</p>
          <h2 className={"uk-margin-remove-top"}>Engage with your Audience</h2>
          <p>
            Your web app will excel far past your competitors&apos; static
            websites! With the added power of a database and powerful server
            technologies your web app development services will be more dynamic.
            This power [use it wisely] let&apos;s you engage with your audiences
            in many fun, creative, and profitable ways:
          </p>
          <ul className={"uk-list"}>
            <li>
              <i className="ri-check-fill uk-margin-right" />
              Client Logins
            </li>
            <li>
              <i className="ri-check-fill uk-margin-right" />
              Online Forms
            </li>
            <li>
              <i className="ri-check-fill uk-margin-right" />
              Comments
            </li>
            <li>
              <i className="ri-check-fill uk-margin-right" />
              Bookings and Events Calendars
            </li>
            <li>
              <i className="ri-check-fill uk-margin-right" />
              Direct Messaging and Chat Rooms
            </li>
            <li>
              <i className="ri-check-fill uk-margin-right" />
              Email, SMS, and Browser Notifications
            </li>
            <li>
              <i className="ri-check-fill uk-margin-right" />
              Media Uploads
            </li>
            <li>
              <i className="ri-check-fill uk-margin-right" />
              File Scanning and Conversion
            </li>
            <li>
              <i className="ri-check-fill uk-margin-right" />
              Reviews
            </li>
          </ul>
        </div>
      </div>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <p>
            I’m a certified web developer and have many years of experience
            offering intentional and powerful web app development services. I
            can create projects with a combination of HTML, CSS, Sass, Less,
            Bootstrap, UI Kit, Javascript, jQuery, React, PHP, Laravel, Python,
            Django, WordPress, Drupal, and many other tools.
          </p>
          <p className={"uk-h2"}>
            <i className={"devicon-react-original uk-margin-right"} />
            <i className={"devicon-nextjs-original uk-margin-right"} />
            <i className={"devicon-mongodb-plain-wordmark uk-margin-right"} />
            <i className={"devicon-googlecloud-plain"} />
          </p>
        </div>
      </div>
      <Testimonials />
      <Blog />
    </>
  );
}
