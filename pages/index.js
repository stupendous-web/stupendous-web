import Image from "next/image";
import Head from "next/head";
import NextLink from "next/link";
import { useGlobal } from "../lib/context";
import axios from "axios";
import { LocalBusinessJsonLd } from "next-seo";
import { RiMailFill, RiPhoneFill, RiCheckFill } from "react-icons/ri";
import { DiReact } from "react-icons/di";
import { Parallax } from "react-scroll-parallax";
import Slider from "react-slick";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Tooltip,
  Text,
  SimpleGrid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Link,
  ListItem,
  ListIcon,
  List,
  IconButton,
} from "@chakra-ui/react";

import Slide from "../components/Slide";
import Testimonials from "../components/Testimonials";
import Questions from "../components/questions";
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
      <Flex
        direction={["column", "row"]}
        align={"center"}
        justify={"center"}
        h={"100vh"}
        w={"100%"}
        maxW={"container.xl"}
        px={4}
        py={32}
        mx={"auto"}
        my={[32, 0]}
      >
        <Box w={["100%", "50%"]} pr={[0, 4]}>
          <Heading as={"h1"} size={"2xl"} mb={16}>
            Software Development Services
          </Heading>
          <Flex align={"center"} mb={8}>
            <Link
              as={NextLink}
              href={"https://cal.com/stupendousweb/consultation"}
            >
              <Button variant={"bonkers"} size={"lg"} mr={8}>
                Get yours Now
              </Button>
            </Link>
            <Tooltip label={"Email me!"} fontSize={"md"}>
              <Link as={NextLink} href={"mailto:topher@stupendousweb.com"}>
                <IconButton
                  colorScheme={"primary"}
                  variant={"link"}
                  aria-label={"Email me!"}
                  size={"lg"}
                  icon={<RiMailFill />}
                  pt={4}
                />
              </Link>
            </Tooltip>
            <Tooltip label={"Call or Text Me!"} fontSize={"md"}>
              <Link as={NextLink} href={"tel:5108906429"}>
                <IconButton
                  colorScheme={"primary"}
                  variant={"link"}
                  aria-label={"Email me!"}
                  size={"lg"}
                  icon={<RiPhoneFill />}
                  pt={4}
                />
              </Link>
            </Tooltip>
          </Flex>
          <Text mt={8}>
            I help people with something to share who want to engage with their
            community by delivering software development services that improve
            their brand awareness and authority.
          </Text>
        </Box>
        <Box w={["100%", "50%"]}>
          <Image
            src={mockup}
            alt={"Mockup | Software Development Services"}
            size={50}
            priority
            onLoadingComplete={() => setIsLoading(false)}
          />
        </Box>
      </Flex>
      <Container maxW={"container.sm"} pt={[16, 0]} pb={[16, 32]}>
        <Heading size={"xl"} mb={8}>
          If you want to build community, build stupendous software.
        </Heading>
        <Text as={"code"}>
          [topher@stupendous ~]$ <span className={"flash"}>▌</span>
        </Text>
      </Container>
      <Container maxW={"container.lg"} pt={[16, 32]} mb={8}>
        <Text w={["100%", "50%"]}>
          I build engaging software. Together we can create web, iOS, and
          Android apps, broaden your digital presence, and build stronger
          digital communities.
        </Text>
      </Container>
      <Container maxW={"100%"} pb={[16, 32]}>
        <Parallax translateY={[0, 0]} translateX={[100, -100]}>
          <SimpleGrid columns={4} spacing={[4, 8]} mb={[4, 8]}>
            <Box>
              <Image src={denversCupid} alt={"Software Development Services"} />
            </Box>
            <Box>
              <Image
                src={powerTripFitness}
                alt={"Software Development Services"}
              />
            </Box>
            <Box>
              <Image src={radTraining} alt={"Software Development Services"} />
            </Box>
            <Box>
              <Image
                src={securityEngineers}
                alt={"Software Development Services"}
              />
            </Box>
          </SimpleGrid>
        </Parallax>
        <Parallax translateY={[0, 0]} translateX={[100, -100]}>
          <SimpleGrid columns={4} spacing={[4, 8]} mb={[4, 8]}>
            <Box>
              <Image
                src={brontezPurnell}
                alt={"Software Development Services"}
              />
            </Box>
            <Box>
              <Image src={deriddle} alt={"Software Development Services"} />
            </Box>
            <Box>
              <Image src={graceAvila} alt={"Software Development Services"} />
            </Box>
            <Box>
              <Image src={iWannaBeFit} alt={"Software Development Services"} />
            </Box>
          </SimpleGrid>
        </Parallax>
        <Parallax translateY={[0, 0]} translateX={[100, -100]}>
          <SimpleGrid columns={4} spacing={[4, 8]} mb={[4, 8]}>
            <Box>
              <Image src={jFitness} alt={"Software Development Services"} />
            </Box>
            <Box>
              <Image src={kendraHicks} alt={"Software Development Services"} />
            </Box>
            <Box>
              <Image src={lPSolutions} alt={"Software Development Services"} />
            </Box>
            <Box>
              <Image src={luckyArtists} alt={"Software Development Services"} />
            </Box>
          </SimpleGrid>
        </Parallax>
      </Container>
      <Container maxW={"container.lg"} py={[16, 32]}>
        <Heading pb={8}>Everything for Everyone</Heading>
        <Tabs colorScheme={"primary"}>
          <TabList>
            <Tab>Hosting</Tab>
            <Tab>Support</Tab>
            <Tab>SEO &amp; ASO</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                I&apos;ll handle the technical work of getting you, your brand,
                and your message online. I&apos;ll set you up with your managed,
                fast, and secure website hosting and Google Play and Apple App
                Store listings as part of my software development services. Sit
                back, relax, and continue to do the work you love.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Let&apos;s get this right! We&apos;ll work closely together to
                make sure your web, iOS, and Android apps are perfect as part of
                my software development services. I&apos;m available via email,
                phone, video chat, and even in person in Las Vegas. You can
                email me anytime with your required updates and concerns.
                I&apos;m always here.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Search engine and app store optimization play important roles in
                getting your product to your audiences. So, let&apos;s keep your
                web, iOS, and Android apps up to date with the latest SEO and
                ASO. My software development services get more people to your
                app. Let&apos;s work some magic!
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Container maxW={"container.lg"} py={[16, 32]}>
        <Slider autoplay={true} infinite={true} arrows={false}>
          <Slide
            image={0}
            heading={".business"}
            text={"hello@yourwork.business"}
          />
          <Slide
            image={1}
            heading={".pictures"}
            text={"hello@yourwork.pictures"}
          />
          <Slide image={2} heading={".org"} text={"hello@yourwork.org"} />
          <Slide image={3} heading={".fans"} text={"hello@yourwork.fans"} />
        </Slider>
      </Container>
      <Container maxW={"container.lg"} py={[16, 32]}>
        <Text>eCommerce</Text>
        <Heading mb={8}>Accept Payments</Heading>
        <Text mb={8}>
          Let&apos;s keep your work sustainable. My software development
          services integrate with your{" "}
          <Link
            as={NextLink}
            href={"https://stripe.com/payments"}
            title={"Stripe Payments"}
            target={"_blank"}
            rel={"nofollow noreferrer"}
          >
            Stripe
          </Link>{" "}
          and{" "}
          <Link
            as={NextLink}
            href={"https://www.paypal.com/us/business/accept-payments"}
            title={"Paypal Payments"}
            target={"_blank"}
            rel={"nofollow noreferrer"}
          >
            Paypal
          </Link>{" "}
          accounts. Let your software make you money so you can focus on your
          work.
        </Text>
        <SimpleGrid columns={[1, 2]} spacing={8}>
          <Box>
            <Image
              src={cms}
              alt={"Software Development Services"}
              style={{ marginBottom: "2rem" }}
            />
            <Text>CMS</Text>
            <Heading mb={8}>Publish Content</Heading>
            <Text>
              Managing your web, iOS, and Android app text, images, and even
              videos is easy! My software development services include a content
              management system. Now you can easily add, update, and remove
              content at any time.
            </Text>
          </Box>
          <Box>
            <Image
              src={analytics}
              alt={"Software Development Services"}
              style={{ marginBottom: "2rem" }}
            />
            <Text>Analytics</Text>
            <Heading mb={8}>Find Customers</Heading>
            <Text>
              There are many new people out there waiting to meet you that are
              very interested in what you do! My software development services
              come with web analytics at now extra charge. Learn more about your
              current audience while also discovering new ones with analytics.{" "}
              <Link
                as={NextLink}
                href={"https://stupendousanalytics.com"}
                title={"NextJS Website Analytics Dashboard"}
              >
                Learn more
              </Link>
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
      <Container maxW={"container.lg"} py={[16, 32]}>
        <Text>Web &amp; Phone Apps</Text>
        <Heading mb={8}>Engage with your Audience</Heading>
        <Text mb={8}>
          My software development services will excel you and your work far past
          your competitors and their websites! With the added power of a
          database and powerful server technologies, your web and phone apps
          will be full of useful features. This power [use it wisely] let&apos;s
          you engage with your audiences in many fun, creative, and profitable
          ways:
        </Text>
        <List spacing={4}>
          {solutions.map((solution) => (
            <ListItem key={solution}>
              <ListIcon as={RiCheckFill} />
              {solution}
            </ListItem>
          ))}
        </List>
      </Container>
      <Container maxW={"container.xl"} pt={[16, 32]} mb={8}>
        <Text w={["100%", "66.66%"]} mb={4}>
          I&apos;m a certified web developer and have many years of experience
          offering intentional and powerful software development services. I can
          create your tools with a combination of HTML, CSS, Less, UI Kit,
          Bootstrap, Material UI, Tailwind, Javascript, React, Next.js, jQuery,
          PHP, Laravel, MySQL, MongoDB, and many other tools.
        </Text>
        <Icon as={DiReact} boxSize={16} />
      </Container>
      <Testimonials />
      <Questions />
      <Container maxW={"container.lg"} py={[16, 32]}>
        <Text>Business</Text>
        <Heading mb={8}>Expand your Reach</Heading>
        <Text mb={8}>
          Do what you do! Web and phone apps can be useful in any industry. My
          software development services provide people like you with the tools
          they need to grow their business while reaching existing and new
          customers and increasing profitability so you can continue to do what
          you love.
        </Text>
        <List spacing={4}>
          {industries.map((industry) => (
            <ListItem key={industry}>
              <ListIcon as={RiCheckFill} />
              {industry}
            </ListItem>
          ))}
        </List>
      </Container>
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
