import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useGlobal } from "../lib/context";
import axios from "axios";
import { LocalBusinessJsonLd } from "next-seo";
import "devicon";

import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import CTA from "../components/CTA";

import mockup from "/images/mockup.png";
import denversCupid from "/images/projects/denvers-cupid.jpg";
import powerTripFitness from "/images/projects/power-trip-fitness.jpg";
import radTraining from "/images/projects/rad-training.jpg";
import securityEngineers from "/images/projects/security-engineers.jpg";
import brontezPurnell from "/images/projects/brontez-purnell.jpg";
import deriddle from "/images/projects/deriddle.jpg";
import graceAvila from "/images/projects/grace-avila.jpg";
import iWannaBeFit from "/images/projects/iwannabe-fit.jpg";
import jFitness from "/images/projects/j-fitness.jpg";
import kendraHicks from "/images/projects/kendra-hicks.jpg";
import lPSolutions from "/images/projects/lp-solutions.jpg";
import luckyArtists from "/images/projects/lucky-artists.jpg";
import business from "/images/domains/business.jpg";
import pictures from "/images/domains/pictures.jpg";
import org from "/images/domains/org.jpg";
import fans from "/images/domains/fans.jpg";

import analytics from "../images/analytics.png";
import cms from "../images/cms.png";

export default function Home({ articles }) {
  const { setIsLoading } = useGlobal();

  const solutions = [
    "CRM, Customer Relationship Managers",
    "Project Management Systems",
    "Collaboration Software Apps",
    "Data and Analytics Dashboards",
    "Patient Portals and CRM’s",
    "Inventory and Delivery Managers",
    "Maps",
    "Language Support Apps",
    "Support Ticket Managers",
    "Tax Filing Systems",
    "Ecommerce Web Apps",
    "Partner Portal Apps",
    "LMS, Learning Management Systems",
    "Financial and Tax Systems",
    "Client and Customer Logins",
    "Online Submission Forms",
    "Discussion Forum Apps",
    "Social Media Platforms",
    "Bookings and Events Calendars",
    "Direct Messaging and Chat Rooms",
    "Email, SMS, and Browser Notifications",
    "Media Upload and Management System",
    "File Scanning and Conversion",
    "Online Review Apps",
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Telecommunication",
    "Insurance",
    "Law",
    "Art and Design",
    "Crypto and NFT's",
    "Sustainability",
    "Marketing and Advertising",
    "Professional Services",
    "Logistics",
    "Much More",
  ];

  return (
    <>
      <Head>
        <title>
          Software Development Services | Stupendous Web | If you want to build
          community, build stupendous software
        </title>
        <meta
          name={"description"}
          content={
            "I help people with something to share who want to engage with their community by delivering software development services that improve their brand awareness and authority."
          }
        />
      </Head>
      <LocalBusinessJsonLd
        type={"ProfessionalService"}
        id={"https://stupendousweb.com"}
        name={"Stupendous Software Development Services"}
        description={
          "I help people with something to share who want to engage with their community by delivering software development services that improve their brand awareness and authority."
        }
        url={"https://stupendousweb.com"}
        telephone={"+15108906429"}
        address={{
          streetAddress: "5150 Spyglass Hill Dr.",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89142",
          addressCountry: "US",
        }}
        geo={{
          latitude: "36.140720",
          longitude: "-115.061710",
        }}
      />
      <div
        className={
          "uk-section uk-section-xlarge uk-flex uk-flex-center uk-flex-middle"
        }
        data-uk-height-viewport={""}
      >
        <div className={"uk-width-1-1"}>
          <div className={"uk-container"}>
            <div
              className={"uk-child-width-1-2@s uk-flex-middle"}
              data-uk-grid={""}
            >
              <div>
                <h1>Software Development Services</h1>
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
                  I help people with something to share who want to engage with
                  their community by delivering software development services
                  that improve their brand awareness and authority.
                </p>
              </div>
              <div>
                <Image
                  src={mockup}
                  alt={"Software Development Services"}
                  priority
                  onLoadingComplete={() => setIsLoading(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <p className={"uk-h1"}>
            If you want to build community, build stupendous software.
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
            I build engaging software. Together we can create web, iOS, and
            Android apps, broaden your digital presence, and build stronger
            digital communities.
          </p>
        </div>
        <div className={"uk-container uk-container-expand"}>
          <div
            className={"uk-child-width-1-4 uk-margin-large"}
            data-uk-grid={""}
            data-uk-parallax={"x: 50%, -100%"}
          >
            <div>
              <Image src={denversCupid} alt={"Software Development Services"} />
            </div>
            <div>
              <Image
                src={powerTripFitness}
                alt={"Software Development Services"}
              />
            </div>
            <div>
              <Image src={radTraining} alt={"Software Development Services"} />
            </div>
            <div>
              <Image
                src={securityEngineers}
                alt={"Software Development Services"}
              />
            </div>
          </div>
          <div
            className={"uk-child-width-1-4 uk-margin-large"}
            data-uk-grid={""}
            data-uk-parallax={"x: 50%, -100%"}
          >
            <div>
              <Image
                src={brontezPurnell}
                alt={"Software Development Services"}
              />
            </div>
            <div>
              <Image src={deriddle} alt={"Software Development Services"} />
            </div>
            <div>
              <Image src={graceAvila} alt={"Software Development Services"} />
            </div>
            <div>
              <Image src={iWannaBeFit} alt={"Software Development Services"} />
            </div>
          </div>
          <div
            className={"uk-child-width-1-4 uk-margin-large"}
            data-uk-grid={""}
            data-uk-parallax={"x: 50%, -100%"}
          >
            <div>
              <Image src={jFitness} alt={"Software Development Services"} />
            </div>
            <div>
              <Image src={kendraHicks} alt={"Software Development Services"} />
            </div>
            <div>
              <Image src={lPSolutions} alt={"Software Development Services"} />
            </div>
            <div>
              <Image src={luckyArtists} alt={"Software Development Services"} />
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
              <a href={"#"}>SEO and ASO</a>
            </li>
          </ul>
          <ul className={"uk-switcher"}>
            <li>
              I&apos;ll handle the technical work of getting you, your brand,
              and your message online. I&apos;ll set you up with your managed,
              fast, and secure website hosting and Google Play and Apple App
              Store listings as part of my software development services. Sit
              back, relax, and continue to do the work you love.
            </li>
            <li>
              Let&apos;s get this right! We&apos;ll work closely together to
              make sure your web, iOS, and Android apps are perfect as part of
              my software development services. I&apos;m available via email,
              phone, video chat, and even in person in Las Vegas. You can email
              me anytime with your required updates and concerns. I&apos;m
              always here.
            </li>
            <li>
              Search engine and app store optimization play important roles in
              getting your product to your audiences. So, let&apos;s keep your
              web, iOS, and Android apps up to date with the latest SEO and ASO.
              My software development services get more people to your app.
              Let&apos;s work some magic!
            </li>
          </ul>
        </div>
      </div>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <div
            className={"uk-position-relative uk-visible-toggle"}
            tabIndex={-1}
            data-uk-slideshow={
              "autoplay: true; autoplay-interval: 5000; pause-on-hover: false"
            }
          >
            <ul className={"uk-slideshow-items"}>
              <li>
                <Image
                  src={business}
                  alt={"Software Development Services"}
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
                  <p className={"uk-margin-remove"}>hello@yourwork.business</p>
                </div>
              </li>
              <li>
                <Image
                  src={pictures}
                  alt={"Software Development Services"}
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
                  <p className={"uk-margin-remove"}>hello@yourwork.pictures</p>
                </div>
              </li>
              <li>
                <Image
                  src={org}
                  alt={"Software Development Services"}
                  className={"uk-cover"}
                />
                <div
                  className={
                    "uk-position-center uk-position-small uk-text-center uk-light"
                  }
                >
                  <p className={"uk-heading-medium uk-margin-remove"}>.org</p>
                  <p className={"uk-margin-remove"}>hello@yourwork.org</p>
                </div>
              </li>
              <li>
                <Image
                  src={fans}
                  alt={"Software Development Services"}
                  className={"uk-cover"}
                />
                <div
                  className={
                    "uk-position-center uk-position-small uk-text-center uk-light"
                  }
                >
                  <p className={"uk-heading-medium uk-margin-remove"}>.fans</p>
                  <p className={"uk-margin-remove"}>hello@yourwork.fans</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <h6 className={"uk-margin-remove"}>eCommerce</h6>
          <h2 className={"uk-margin-remove-top"}>Accept Payments</h2>
          <p>
            Let&apos;s keep your work sustainable. My software development
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
            accounts. Let your software make you money so you can focus on your
            work.
          </p>
        </div>
      </div>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <div data-uk-grid={""}>
            <div className={"uk-width-1-2@s"}>
              <Image src={cms} alt={"Software Development Services"} priority />
              <h6 className={"uk-margin-remove-bottom"}>CMS</h6>
              <h2 className={"uk-margin-remove-top"}>Publish Content</h2>
              <p>
                Managing your web, iOS, and Android app text, images, and even
                videos is easy! My software development services include a
                content management system. Now you can easily add, update, and
                remove content at any time.
              </p>
            </div>
            <div className={"uk-width-1-2@s"}>
              <Image
                src={analytics}
                alt={"Software Development Services"}
                priority
              />
              <h6 className={"uk-margin-remove-bottom"}>Analytics</h6>
              <h2 className={"uk-margin-remove-top"}>Find Customers</h2>
              <p>
                There are many new people out there waiting to meet you that are
                very interested in what you do! My software development services
                come with web analytics at now extra charge. Learn more about
                your current audience while also discovering new ones with
                analytics.{" "}
                <Link
                  href={"https://stupendousanalytics.com"}
                  title={"NextJS Website Analytics Dashboard"}
                >
                  Learn more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-small"}>
          <h6 className={"uk-margin-remove"}>Web and Phone Apps</h6>
          <h2 className={"uk-margin-remove-top"}>Engage with your Audience</h2>
          <p>
            My software development services will excel you and your work far
            past your competitors and their websites! With the added power of a
            database and powerful server technologies, your web and phone apps
            will be full of useful features. This power [use it wisely]
            let&apos;s you engage with your audiences in many fun, creative, and
            profitable ways:
          </p>
          <ul className={"uk-list uk-column-1-2@s"}>
            {solutions.map((solution) => {
              return (
                <li key={solution}>
                  <i className="ri-check-fill uk-margin-right" />
                  {solution}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={"uk-section uk-section-large"}>
        <div className={"uk-container uk-container-small"}>
          <p>
            I&apos;m a certified web developer and have many years of experience
            offering intentional and powerful software development services. I
            can create your tools with a combination of HTML, CSS, Less, UI Kit,
            Bootstrap, Material UI, Tailwind, Javascript, React, Next.js,
            jQuery, PHP, Laravel, MySQL, MongoDB, and many other tools.
          </p>
          <p className={"uk-h2"}>
            <i className={"devicon-react-original uk-margin-right"} />
            <i className={"devicon-nextjs-original uk-margin-right"} />
          </p>
        </div>
      </div>
      <Testimonials />
      <div className={"uk-section"}>
        <div className={"uk-container uk-container-small"}>
          <h6 className={"uk-margin-remove"}>Business</h6>
          <h2 className={"uk-margin-remove-top"}>Expand your Reach</h2>
          <p>
            Do what you do! Web and phone apps can be useful in any industry. My
            software development services provide people like you with the tools
            they need to grow their business while reaching existing and new
            customers and increasing profitability so you can continue to do
            what you love.
          </p>
          <ul className={"uk-list uk-column-1-2@s"}>
            {industries.map((industry) => {
              return (
                <li key={industry}>
                  <i className="ri-check-fill uk-margin-right" />
                  {industry}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Blog articles={articles} />
      <CTA />
    </>
  );
}

export async function getStaticProps() {
  const posts = (
    await axios.get(
      "https://public-api.wordpress.com/rest/v1.1/sites/67222684/posts"
    )
  ).data?.posts;

  return {
    props: {
      articles: posts,
    },
    revalidate: 10,
  };
}
