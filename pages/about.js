import Image from "next/image";
import Head from "next/head";
import { useGlobal } from "../lib/context";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

import CTA from "../components/CTA";

import isometric from "../images/isometrics/isometric-2-1.png";
import me from "../images/me.png";

export default function About() {
  const { setIsLoading } = useGlobal();

  return (
    <>
      <Head>
        <title>About | Software Development Services | Stupendous Web</title>
      </Head>
      <Container maxW={"container.xl"} pt={32} pb={8}>
        <Flex direction={["column", "row"]} align={"center"}>
          <Box w={["100%", "33.33%"]} pr={4} mb={8}>
            <Image
              src={isometric}
              alt={"Software Development Services"}
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
          </Box>
          <Box w={["100%", "66.66%"]}>
            <Text
              as={"span"}
              fontFamily={"mono"}
              fontSize={"64px"}
              float={"left"}
              lineHeight={"60px"}
              pt={1}
              pr={2}
              mb={0}
            >
              D
            </Text>
            <Text as={"span"} fontFamily={"mono"}>
              o you value meaningful work, tolerance, equality, creativity, and
              authenticity? My software development services help people like
              you to engage with their audiences and tribes in creative and
              impactful ways.
            </Text>
          </Box>
        </Flex>
      </Container>
      <Parallax translateY={[0, 0]} translateX={[250, -100]}>
        <Container maxW={"container.xl"} py={8}>
          <Heading as={"h1"} size={"4xl"}>
            About
          </Heading>
        </Container>
      </Parallax>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <Flex justify={"flex-end"}>
          <Box w={["100%", "66.66%"]}>
            <Image
              src={me}
              alt={"Software Development Services"}
              style={{
                borderRadius: "50px",
                float: "left",
                marginRight: "1rem",
              }}
              width={100}
            />
            <Text mb={4}>
              Hello, pioneers. I&apos;m Topher [INFP]. I&apos;m here to help
              elevate your projects that support meaningful work, tolerance,
              equality, creativity, and authenticity through my custom software
              development services. My degree in web application development
              from CSU, award-winning projects, and years of work experience are
              all at your disposal.
            </Text>
            <Heading mb={4}>Website or App?</Heading>
            <Text mb={4}>
              Your customers need power and utility, and not just another still,
              inactive, and even boring website. Engaging with your customers
              means investing in more than just a website. My software
              development services will bring value to your product via your new
              web app. Not to be entirely confused with apps on your phone, web
              apps integrate the latest web technologies with your data to bring
              your audiences something better than just a landing page.
              Don&apos;t leave your customers in the dust; give them the latest,
              greatest, and most value with a sparkly new web app.
            </Text>
            <Heading mb={4}>iOS and Android</Heading>
            <Text mb={4}>
              Keep your product at your customers&apos; finger tips. In addition
              to building something powerful and useful, together we can build
              something your customers can access easily anywhere in the world.
              In addition to building for the web, my software development
              services also include building apps for phones. With the latest
              technologies we&apos;ll create easier access to you and your brand
              in the form of a iOS and Android apps. Keep your customer
              engagement high, increasing your product value, by allowing your
              customers to take you in their pockets anywhere.
            </Text>
            <Heading mb={4}>Strategy</Heading>
            <Text mb={4}>
              Tell me about your values, the communities your serve, your
              mission, and your objectives! Better knowing you, your brand, and
              your product or service creates a stronger and more valuable
              application. My software development services are focused on and
              centered around your mission and objectives throughout the entire
              development process. Before, during, and even after production,
              we&apos;ll continue to fine-tune your product and pitch. I will
              ensure your web, iOS, and Android apps embody you and your values
              boldly and proudly.
            </Text>
            <Heading mb={4}>Process</Heading>
            <Text mb={4}>
              Let&apos;s get you up and running with software development
              services in three easy steps. First, schedule the first of your
              two FREE 1-hour consultations. After your first consultation,
              you&apos;ll receive a creative brief and project plan. Secondly,
              we&apos;ll build you a secret website where you can preview our
              progress anytime. Then, when the time is right, we&apos;ll launch
              your apps to the web and app stores publicly. I&apos;m always here
              to answer questions, maintain your software and make updates to
              it, and be your guide to making this fast, easy, and even fun!
            </Text>
          </Box>
        </Flex>
      </Container>
      <CTA />
    </>
  );
}
