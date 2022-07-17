import { useEffect } from "react";
import Head from "next/head";
import { useLoading } from "../lib/context";
import imagesloaded from "imagesloaded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaravel,
  faReact,
  faHtml5,
  faCss3,
  faLess,
  faUikit,
  faPhp,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  const { setLoading } = useLoading();
  useEffect(() => {
    imagesloaded(document, () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Projects | Web App Development Services | Stupendous Web</title>
      </Head>
      <div>
        <div
          className={"uk-section uk-section-xlarge uk-padding-remove-bottom"}
        >
          <div className={"uk-container uk-container-small"}>
            <div className={"uk-flex-middle"} uk-grid={""}>
              <div className={"uk-width-1-3@s uk-visible@s"}>
                <img
                  src={"/images/isometrics/isometric-1-1.png"}
                  alt={"Web App Development Services"}
                />
              </div>
              <div className={"uk-width-2-3@s"}>
                <p className={"uk-text-justify uk-dropcap"}>
                  Let&apos;s build better internet community through my custom
                  web app development services. Look at a few of the certified,
                  award-winning, and engaging web apps I’ve created. These
                  projects helped build my clients stronger brand awareness and
                  authority.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={"uk-section"}>
          <div className={"uk-container"}>
            <h1
              className={"uk-heading-2xlarge uk-text-right"}
              uk-parallax={"x: 0, -800"}
            >
              Projects
            </h1>
          </div>
        </div>
        <div className={"uk-section"}>
          <div className={"uk-container uk-container-small"}>
            <div uk-grid={""}>
              <div className={"uk-width-1-3@s"} />
              <div className={"uk-width-2-3@s"}>
                <div className={"uk-section uk-padding-remove-top"}>
                  <img
                    src={"/images/projects/iwannabe-fit.jpg"}
                    alt={"Web App Development Services"}
                  />
                  <h2>iwannabe&middot;fit</h2>
                  <p className={"uk-text-emphasis"}>
                    <FontAwesomeIcon
                      icon={faLaravel}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faReact}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faCss3}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faLess}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faUikit}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon icon={faPhp} />
                  </p>
                  <p>
                    Web apps can help you and your customers achieve your goals.
                    These personal fitness trainers needed an app to help train
                    their clients and a way to generate customer leads. A sleek
                    website was built to showcase videos and entice people to
                    register for the app. The app consists of intake forms, a
                    headshot upload, video exchange, before and after pictures
                    exchange, a food journal, and a payment portal. The app was
                    built to help the trainers improve their clients&apos;
                    health and wellbeing while the website brings in more
                    interested customers.
                  </p>
                </div>
                <div className={"uk-section"}>
                  <img
                    src={"/images/projects/power-trip-fitness.jpg"}
                    alt={"Web App Development Services"}
                  />
                  <h2>Power Trip Fitness</h2>
                  <p className={"uk-text-emphasis"}>
                    <FontAwesomeIcon
                      icon={faWordpress}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faCss3}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faLess}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faUikit}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon icon={faPhp} />
                  </p>
                  <p>
                    A content management system can help you maintain your own
                    content. The folks at PowerTrip Fitness were beginners in
                    the field of digital media and wanted something easy to
                    update. Their customers see an impressive and enticing
                    WordPress theme when visiting their site that can be updated
                    by employees through a powerful dashboard. The theme
                    consists of slideshows, animations, and parallax to keep
                    visitors engaged while PowerTrip can update pages and posts
                    to fit their needs. This client has the ability to easily
                    create, update, and delete content anytime without a web
                    developer.
                  </p>
                </div>
                <div className={"uk-section"}>
                  <img
                    src={"/images/projects/rad-training.jpg"}
                    alt={"Web App Development Services"}
                  />
                  <h2>Rad Dog Training</h2>
                  <p className={"uk-text-emphasis"}>
                    <FontAwesomeIcon
                      icon={faLaravel}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faReact}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faCss3}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faLess}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faUikit}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon icon={faPhp} />
                  </p>
                  <p>
                    A website can connect you and your services with the
                    customers that support your work. This client wanted to give
                    their customers the capability to schedule and pay for
                    services online. Using front-end genius and powerful
                    back-end technologies combined with a digital payment
                    processor we built a booking and payment system custom to
                    their brand. Not only can clients book and receive the
                    services they need, but they can pay for and support the
                    creative and hard work that they need.
                  </p>
                  <blockquote>
                    <p>
                      I absolutely loved working with Stupendous Web Marketing.
                      My website looks exactly how I wanted. Anytime something
                      needed to be changed it was done in a prompt and timely
                      manner. Stupendous Web Marketing seems to have endless
                      possibilities as far as function and the overall design.
                      It looks just like what I requested. I say if you know
                      what you want, Stupendous Web Marketing can get it done
                      with quality!&quot;
                    </p>
                    <footer>
                      <cite>Cloe Server</cite>
                    </footer>
                  </blockquote>
                </div>
                <div className={"uk-section"}>
                  <img
                    src={"/images/projects/lucky-artists.jpg"}
                    alt={"Web App Development Services"}
                  />
                  <h2>Lucky Artists</h2>
                  <p className={"uk-text-emphasis"}>
                    <FontAwesomeIcon
                      icon={faLaravel}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faReact}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faCss3}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faLess}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faUikit}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon icon={faPhp} />
                  </p>
                  <p>
                    A professional layout for your website adds reputation to
                    your brand. This graphic designer wanted something reputable
                    enough to generate reliable leads. The works are presented
                    in a way that amplify skills and add value to the works in
                    turn generating reliable and turstworthy leads.
                  </p>
                </div>
                <div className={"uk-section"}>
                  <img
                    src={"/images/projects/deriddle.jpg"}
                    alt={"Affordable Custom Website Design"}
                  />
                  <h2>Deriddle</h2>
                  <p className={"uk-text-emphasis"}>
                    <FontAwesomeIcon
                      icon={faLaravel}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faReact}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faCss3}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faLess}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faUikit}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon icon={faPhp} />
                  </p>
                  <p>
                    When two people who speak different languages chat online
                    they often have to copy and paste text into a translator
                    before sending every message. What if people could use
                    instant messing apps like the ones on their phones to text
                    anyone in any language instantly?! This web app is an
                    instant messaging platform that translates messages into
                    over 100 languages using the Google Translate API so people
                    can talk to anybody quickly and easily without having to
                    copy and paste! This app can be used by businesses, friends,
                    or family over seas to work and communicate together faster
                    and more efficiently.
                  </p>
                </div>
                <div className={"uk-section"}>
                  <img
                    src={"/images/projects/brontez-purnell.jpg"}
                    alt={"Web App Development Services"}
                  />
                  <h2>Brontez Purnell</h2>
                  <p className={"uk-text-emphasis"}>
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faCss3}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faLess}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faUikit}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon icon={faPhp} />
                  </p>
                  <p>
                    Having a beautiful, memorable, and easy to digest portfolio
                    of your work with a strong call to action can build the
                    relationships you want and need. Brontez Purnell wanted to
                    have a digital portfolio of his work online as a way for
                    leads to contact him. This bright and funky design pulls all
                    the stop to create an interesting layout, catchy design, and
                    strong calls to action. The website gives Brontez a
                    professional personal brand and generates leads and builds
                    working relationships for him.
                  </p>
                </div>
                <div className={"uk-section"}>
                  <img
                    src={"/images/projects/grace-avila.jpg"}
                    alt={"Web App Development Services"}
                  />
                  <h2>Super Natural</h2>
                  <p className={"uk-text-emphasis"}>
                    <FontAwesomeIcon
                      icon={faWordpress}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faCss3}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faLess}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faUikit}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon icon={faPhp} />
                  </p>
                  <p>
                    A blog can be a resource for your current and potential
                    clients and give your product or service value. Grace Avila
                    needed something she could edit without my help. WordPress
                    gives her the ability to create lead-generating pages and
                    also maintain a useful blog. Visitors to her site are happy
                    and many of them convert to her biggest fans and paying
                    clients.
                  </p>
                  <blockquote>
                    <p>
                      Working with Topher on my new site was a dream. He worked
                      quickly, thoughtfully and was very responsive. I had a lot
                      of questions on updating the site myself. He walked me
                      through all of my concerns, polished out all the details
                      and completed the site very quickly. I love the look of my
                      new site! I would recommend Topher highly.&quot;
                    </p>
                    <footer>
                      <cite>Grace Avila</cite>
                    </footer>
                  </blockquote>
                </div>
                <div className={"uk-section"}>
                  <img
                    src={"/images/projects/kendra-hicks.jpg"}
                    alt={"Affordable Custom Website Design"}
                  />
                  <h2>Kendra Hicks</h2>
                  <p className={"uk-text-emphasis"}>
                    <FontAwesomeIcon
                      icon={faLaravel}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faReact}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faCss3}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faLess}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon
                      icon={faUikit}
                      className={"uk-margin-small-right"}
                    />
                    <FontAwesomeIcon icon={faPhp} />
                  </p>
                  <p>
                    Web applications can integrate with social media to enhance
                    your reach. Kendra Hicks wanted a fun social media tool
                    where people could endorse her hard work and share it with
                    others. This app lets you upload a selfie, your name, and a
                    message to generate an image that users can then share on
                    social media. This app is just plain fun, adding value to
                    Kendra&apos;s brand already, but also increases her exposure
                    when people share their custom social media cards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
