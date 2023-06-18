import Head from "next/head";
import NextLink from "next/link";
import { useGlobal } from "../lib/context";
import axios from "axios";
import { LocalBusinessJsonLd } from "next-seo";
import { RiArrowRightLine, RiMailLine, RiPhoneLine } from "react-icons/ri";
import { DiReact } from "react-icons/di";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  Link,
  GridItem,
  Button,
  Divider,
} from "@chakra-ui/react";
import Testimonials from "../components/Testimonials";
import Questions from "../components/Questions";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import cTA from "../images/cTA.png";
import CarbonGrid from "../components/CarbonGrid";
import CarbonGridImage from "../components/CarbonGridImage";
import Solutions from "../components/Solutions";
import AppsIndustries from "../components/AppsIndustries";

export default function Home({ articles }) {
  const { setIsLoading } = useGlobal();

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
      <Solutions />
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
      <AppsIndustries />
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
