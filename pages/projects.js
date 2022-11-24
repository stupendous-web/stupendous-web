import Image from "next/image";
import { useGlobal } from "../lib/context";
import { NextSeo } from "next-seo";

import Project from "../components/Project";
import isometric from "../images/isometrics/isometric-1-1.png";

export default function Projects() {
  const { setIsLoading } = useGlobal();

  return (
    <>
      <NextSeo
        title={
          "Projects | Stupendous Web | If you want to build community, build a stupendous web app"
        }
      />

      <div>
        <div
          className={"uk-section uk-section-xlarge uk-padding-remove-bottom"}
        >
          <div className={"uk-container uk-container-small"}>
            <div className={"uk-flex-middle"} data-uk-grid={""}>
              <div className={"uk-width-1-3@s uk-visible@s"}>
                <Image
                  src={isometric}
                  alt={"Web App Development Services"}
                  priority
                  onLoadingComplete={setIsLoading(false)}
                />
              </div>
              <div className={"uk-width-2-3@s"}>
                <p className={"uk-text-justify uk-dropcap monospace"}>
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
              data-uk-parallax={"x: 0, -800"}
            >
              Projects
            </h1>
          </div>
        </div>
        <div className={"uk-section"}>
          <div className={"uk-container uk-container-small"}>
            <div data-uk-grid={""}>
              <div className={"uk-width-1-3@s"} />
              <div className={"uk-width-2-3@s"}>
                <Project
                  image={"/images/projects/pixel-shop.jpg"}
                  name={"The Pixel Shop"}
                  icons={["devicon-nextjs-plain", "devicon-wordpress-plain"]}
                  style={{ paddingTop: 0 }}
                  link={"https://thepixelshop.app"}
                >
                  <p>
                    Because web applications can be dynamic they have the
                    ability to engage with your audiences. The Pixel Shop wanted
                    to create an emersive world full of narrative that shares
                    their beautiful, pixel-perfect NFT&apos;s. The Pixel
                    Shop&apos;s dark mode and parallax scenery keeps their
                    visitors interested in not only the website, but their work
                    for sale. See how my web app development services can keep
                    your audiences engaged in you and the interesting work you
                    do.
                  </p>
                  <blockquote>
                    <p>
                      Topher is a web design wizard. He was incredible to work
                      with from start to finish and was able to build us a
                      completely custom web site. He leverages several useful
                      tools to facilitate the process and maintained great
                      communication and transparency through the whole process.
                      I highly recommend Stupendous Web if you’re in the market
                      for a professional website!&quot;
                    </p>
                    <footer>
                      <cite>Masumi Johnson</cite>
                    </footer>
                  </blockquote>
                </Project>
                <Project
                  image={"/images/projects/iwannabe-fit.jpg"}
                  name={<span>iwannabe&middot;fit</span>}
                  icons={["devicon-laravel-plain", "devicon-react-plain"]}
                >
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
                </Project>
                <Project
                  image={"/images/projects/power-trip-fitness.jpg"}
                  name={"Power Trip Fitness"}
                  icons={["devicon-nextjs-plain", "devicon-wordpress-plain"]}
                  link={"https://powertrip.fitness"}
                >
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
                </Project>
                <Project
                  image={"/images/projects/rad-training.jpg"}
                  name={"Rad Dog Training"}
                  icons={["devicon-laravel-plain", "devicon-react-plain"]}
                >
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
                </Project>

                <Project
                  image={"/images/projects/kendra-hicks.jpg"}
                  name={"Kendra Hicks"}
                  icons={["devicon-laravel-plain", "devicon-react-plain"]}
                >
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
                </Project>
                <Project
                  image={"/images/projects/grace-avila.jpg"}
                  name={"Super Natural"}
                  icons={["devicon-wordpress-plain"]}
                >
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
                </Project>
                <Project
                  image={"/images/projects/brontez-purnell.jpg"}
                  name={"Brontez Purnell"}
                  icons={["devicon-nextjs-plain"]}
                >
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
                </Project>
                <Project
                  image={"/images/projects/deriddle.jpg"}
                  name={"Deriddle"}
                  icons={["devicon-laravel-plain", "devicon-react-plain"]}
                >
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
                </Project>
                <Project
                  image={"/images/projects/lucky-artists.jpg"}
                  name={"Lucky Artists"}
                  icons={["devicon-nextjs-plain"]}
                >
                  <p>
                    A professional layout for your website adds reputation to
                    your brand. This graphic designer wanted something reputable
                    enough to generate reliable leads. The works are presented
                    in a way that amplify skills and add value to the works in
                    turn generating reliable and turstworthy leads.
                  </p>
                </Project>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
