import Image from "next/image";
import Head from "next/head";
import NextLink from "next/link";
import { useGlobal } from "../lib/context";
import axios from "axios";
import { LocalBusinessJsonLd } from "next-seo";
import {
  RiArrowRightLine,
  RiCheckFill,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";
import { DiReact } from "react-icons/di";
import { Parallax } from "react-scroll-parallax";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  SimpleGrid,
  Link,
  ListItem,
  ListIcon,
  List,
  GridItem,
  Button,
  Divider,
} from "@chakra-ui/react";

import Testimonials from "../components/Testimonials";
import Questions from "../components/Questions";
import Blog from "../components/Blog";
import CTA from "../components/CTA";

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

import cTA from "../images/cTA.png";
import CarbonGrid from "../components/CarbonGrid";
import CarbonGridImage from "../components/CarbonGridImage";
import Solutions from "../components/Solutions";

export default function Home({ articles }) {
  const { setIsLoading } = useGlobal();

  const apps = [
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
      <Container maxW={"container.xl"} color={"white"} py={"200px"}>
        <CarbonGrid height={3}>
          <GridItem colSpan={3}>
            <Flex
              h={"100%"}
              direction={"column"}
              justify={"space-between"}
              bg={"gray.900"}
              _hover={{ bg: "gray.800" }}
              p={4}
            >
              <Box>
                <Heading as={"p"} fontSize={"4rem"} mb={4}>
                  Websites, Web Apps, and Phone Apps
                </Heading>
                <Text>
                  I help people with something to share who want to engage with
                  their community by delivering software development services
                  that improve their brand awareness and authority.
                </Text>
              </Box>
              <Box>
                <Link
                  as={NextLink}
                  href={"https://cal.com/stupendousweb/consultation"}
                >
                  <Button
                    colorScheme={"primary"}
                    size={"lg"}
                    mr={12}
                    rightIcon={<RiArrowRightLine />}
                  >
                    Get yours Now
                  </Button>
                </Link>
              </Box>
            </Flex>
          </GridItem>
          <CarbonGridImage
            colSpan={3}
            src={cTA}
            alt={"Women Working | Software Development Services"}
            onLoadingComplete={setIsLoading(false)}
          />
          <GridItem colSpan={2}>
            <Box bg={"gray.900"} p={4} h={"100%"} _hover={{ bg: "gray.800" }}>
              <Link
                as={NextLink}
                href={"mailto:topher@stupendousweb.com"}
                color={"primary.500"}
              >
                <Text fontWeight={"bold"} m={0}>
                  topher@stupendousweb.com
                </Text>
                <Text color={"gray.500"}>Say hi!</Text>
                <RiMailLine size={32} />
              </Link>
              <Divider mt={4} mb={8} />
              <Link as={NextLink} href={"tel:7023089375"} color={"primary.500"}>
                <Text fontWeight={"bold"} m={0}>
                  +1 702.308.9375
                </Text>
                <Text color={"gray.500"}>Text or Call</Text>
                <RiPhoneLine size={32} />
              </Link>
              <Divider mt={4} />
            </Box>
          </GridItem>
        </CarbonGrid>
      </Container>
      <Container maxW={"container.sm"} py={"200px"}>
        <Heading as={"h1"} mb={4}>
          Software Development Services
        </Heading>
        <Text mb={8}>
          If you want to build community, build stupendous software.
        </Text>
        <Text as={"code"} color={"primary.500"}>
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
      <Solutions />
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
          {apps.map((app) => (
            <ListItem key={app}>
              <ListIcon as={RiCheckFill} />
              {app}
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
