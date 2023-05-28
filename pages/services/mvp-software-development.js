import Image from "next/image";
import Head from "next/head";
import { useGlobal } from "../../lib/context";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  AspectRatio,
} from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import { RiCheckFill } from "react-icons/ri";

import CTA from "../../components/CTA";

import isometric from "../../images/isometrics/isometric-2-1.png";
import servicesImage from "../../images/pages/services.png";

export default function MVPSoftwareDevelopment() {
  const { setIsLoading } = useGlobal();

  return (
    <>
      <Head>
        <title>
          MVP Software Development | Software Development Services | Stupendous
          Web
        </title>
      </Head>
      <Container maxW={"container.xl"} pt={32} pb={8}>
        <Flex direction={["column", "row"]} align={"center"}>
          <Box w={["100%", "33.33%"]} pr={4} mb={8}>
            <Image
              src={isometric}
              alt={"MVP Software Development | Software Development Services"}
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
              o you have great ideas on how to improve our lives? Do you have an
              idea for an app or website that can help you help others
              accomplish this?
            </Text>
          </Box>
        </Flex>
      </Container>
      <Parallax translateY={[0, 0]} translateX={[75, -100]}>
        <Container maxW={"container.xl"} py={8}>
          <Heading as={"h1"} size={"4xl"} textAlign={"right"}>
            MVP Software Development
          </Heading>
        </Container>
      </Parallax>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <Flex justify={"flex-end"}>
          <Box w={["100%", "66.66%"]}>
            <Text>
              You need an MVP (minimum viable product) to jumpstart your journey
              into changing the world. You need an MVP to start your fundraising
              and marketing campaigns. Most of all, you need an MVP to get your
              work into the hands of those who need it most.
            </Text>
            <AspectRatio maxW={"100%"} ratio={4 / 3} mb={4}>
              <Image
                src={servicesImage}
                alt={"MVP Software Development | Software Development Services"}
                id={"consulting"}
                style={{ objectFit: "cover", scrollMarginTop: "8rem" }}
              />
            </AspectRatio>
            <Heading>What is an MVP</Heading>
            <Text>
              My MVP software development services are backed by education in
              web application development, years of experience, and good
              reviews. Software including websites, web apps, and iOS and
              Android apps are the link to turning your ideas into worldwide
              action. Take advantage of this opportunity to build a reputable
              MVP product that you can pitch to investors and donors and publish
              powerful problem-solving software via my web and software
              development services.
            </Text>
            <List mb={4}>
              {["Find Investors", "Attract Donors", "Build your Network"].map(
                (item) => (
                  <ListItem key={item}>
                    <ListIcon as={RiCheckFill} />
                    {item}
                  </ListItem>
                )
              )}
            </List>
            <Text>
              Not only will working together, building an MVP that is sure to
              impress, help you get your ideas and work into the world, but my
              MVP product development and software development services will
              yield an impressive product to demo to more people that also want
              to work together with you. These people can contribute their
              skills, networks, and even dollars to help you with your work.
              I’ll build you a strong MVP to help you start a sustainable career
              doing what you love and care about.
            </Text>
          </Box>
        </Flex>
      </Container>
      <CTA />
    </>
  );
}
