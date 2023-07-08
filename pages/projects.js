import { useGlobal } from "../lib/context";
import {
  Card,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import Project from "../components/Project";
import CTA from "../components/CTA";

import { useEffect } from "react";
import FluidHead from "../components/FluidHead";

export default function Projects() {
  const { setIsLoading } = useGlobal();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <FluidHead title={"Projects"} />
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Projects
              </Heading>
              <Text as={"code"}>
                Let&apos;s build internet community through my custom software
                development services. Look at a few of the certified,
                award-winning, and engaging apps I’ve created. They&apos;ve
                helped build my clients stronger brand awareness and authority.{" "}
                <Text as={"span"} className={"flash"}>
                  ▌
                </Text>
              </Text>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 5]}>
            <Project
              images={[
                "pixel-shop-1.png",
                "pixel-shop-2.png",
                "pixel-shop-3.png",
                "pixel-shop-4.png",
              ]}
              name={"The Pixel Shop"}
              quote={
                <Text as={"em"}>
                  Topher is a web design wizard. He was incredible to work with
                  from start to finish and was able to build us a completely
                  custom web site. He leverages several useful tools to
                  facilitate the process and maintained great communication and
                  transparency through the whole process. I highly recommend
                  Stupendous Web if you’re in the market for a professional
                  website!&quot;
                </Text>
              }
              quoteAuthor={"Masumi Johnson"}
            >
              <Text>
                Because web applications can be dynamic they have the ability to
                engage with your audiences. The Pixel Shop wanted to create an
                immersive world full of narrative that shares their beautiful,
                pixel-perfect NFT&apos;s. The Pixel Shop&apos;s dark mode and
                parallax scenery keeps their visitors interested in not only the
                website, but their work for sale. See how my software
                development services can keep your audiences engaged in you and
                the interesting work you do.
              </Text>
            </Project>
            <Project
              images={["iwannabe-fit.jpg"]}
              name={<span>iwannabe&middot;fit</span>}
            >
              <Text>
                Web apps can help you and your customers achieve your goals.
                These personal fitness trainers needed an app to help train
                their clients and a way to generate customer leads. A sleek
                website was built to showcase videos and entice people to
                register for the app. The app consists of intake forms, a
                headshot upload, video exchange, before and after pictures
                exchange, a food journal, and a payment portal. The app was
                built to help the trainers improve their clients&apos; health
                and wellbeing while the website brings in more interested
                customers.
              </Text>
            </Project>
            <Project
              images={["power-trip-fitness.jpg"]}
              name={"Power Trip Fitness"}
            >
              <Text>
                A content management system can help you maintain your own
                content. The folks at PowerTrip Fitness were beginners in the
                field of digital media and wanted something easy to update.
                Their customers see an impressive and enticing WordPress theme
                when visiting their site that can be updated by employees
                through a powerful dashboard. The theme consists of slideshows,
                animations, and parallax to keep visitors engaged while
                PowerTrip can update pages and posts to fit their needs. This
                client has the ability to easily create, update, and delete
                content anytime without a web developer.
              </Text>
            </Project>
            <Project
              images={["rad-training.jpg"]}
              name={"Rad Dog Training"}
              quote={
                <Text as={"em"}>
                  I absolutely loved working with Stupendous Web Marketing. My
                  website looks exactly how I wanted. Anytime something needed
                  to be changed it was done in a prompt and timely manner.
                  Stupendous Web Marketing seems to have endless possibilities
                  as far as function and the overall design. It looks just like
                  what I requested. I say if you know what you want, Stupendous
                  Web Marketing can get it done with quality!&quot;
                </Text>
              }
              quoteAuthor={"Cloe Server"}
            >
              <Text>
                A website can connect you and your services with the customers
                that support your work. This client wanted to give their
                customers the capability to schedule and pay for services
                online. Using front-end genius and powerful back-end
                technologies combined with a digital payment processor we built
                a booking and payment system custom to their brand. Not only can
                clients book and receive the services they need, but they can
                pay for and support the creative and hard work that they need.
              </Text>
            </Project>
            <Project images={["kendra-hicks.jpg"]} name={"Kendra Hicks"}>
              <Text>
                Web applications can integrate with social media to enhance your
                reach. Kendra Hicks wanted a fun social media tool where people
                could endorse her hard work and share it with others. This app
                lets you upload a selfie, your name, and a message to generate
                an image that users can then share on social media. This app is
                just plain fun, adding value to Kendra&apos;s brand already, but
                also increases her exposure when people share their custom
                social media cards.
              </Text>
            </Project>
            <Project
              images={["grace-avila.jpg"]}
              name={"Super Natural"}
              quote={
                <Text as={"em"}>
                  Working with Topher on my new site was a dream. He worked
                  quickly, thoughtfully and was very responsive. I had a lot of
                  questions on updating the site myself. He walked me through
                  all of my concerns, polished out all the details and completed
                  the site very quickly. I love the look of my new site! I would
                  recommend Topher highly.&quot;
                </Text>
              }
              quoteAuthor={"Grace Avila"}
            >
              <Text>
                A blog can be a resource for your current and potential clients
                and give your product or service value. Grace Avila needed
                something she could edit without my help. WordPress gives her
                the ability to create lead-generating pages and also maintain a
                useful blog. Visitors to her site are happy and many of them
                convert to her biggest fans and paying clients.
              </Text>
            </Project>
            <Project images={["brontez-purnell.jpg"]} name={"Brontez Purnell"}>
              <Text>
                Having a beautiful, memorable, and easy to digest portfolio of
                your work with a strong call to action can build the
                relationships you want and need. Brontez Purnell wanted to have
                a digital portfolio of his work online as a way for leads to
                contact him. This bright and funky design pulls all the stop to
                create an interesting layout, catchy design, and strong calls to
                action. The website gives Brontez a professional personal brand
                and generates leads and builds working relationships for him.
              </Text>
            </Project>
            <Project images={["deriddle.jpg"]} name={"Deriddle"}>
              <Text>
                When two people who speak different languages chat online they
                often have to copy and paste text into a translator before
                sending every message. What if people could use instant messing
                apps like the ones on their phones to text anyone in any
                language instantly?! This web app is an instant messaging
                platform that translates messages into over 100 languages using
                the Google Translate API so people can talk to anybody quickly
                and easily without having to copy and paste! This app can be
                used by businesses, friends, or family over seas to work and
                communicate together faster and more efficiently.
              </Text>
            </Project>
            <Project images={["lucky-artists.jpg"]} name={"Lucky Artists"}>
              <Text>
                A professional layout for your website adds reputation to your
                brand. This graphic designer wanted something reputable enough
                to generate reliable leads. The works are presented in a way
                that amplify skills and add value to the works in turn
                generating reliable and turstworthy leads.
              </Text>
            </Project>
          </GridItem>
        </SimpleGrid>
      </Container>
      <CTA />
    </>
  );
}
