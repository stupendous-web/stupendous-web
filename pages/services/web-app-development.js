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

export default function WebAppDevelopment() {
  const { setIsLoading } = useGlobal();

  return (
    <>
      <Head>
        <title>
          Web App Development | Software Development Services | Stupendous Web
        </title>
      </Head>
      <Container maxW={"container.xl"} pt={32} pb={8}>
        <Flex direction={["column", "row"]} align={"center"}>
          <Box w={["100%", "33.33%"]} pr={4} mb={8}>
            <Image
              src={isometric}
              alt={"Web App Development | Software Development Services"}
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
              A
            </Text>
            <Text as={"span"} fontFamily={"mono"}>
              re you doing powerful and impactful work that you love and care
              about? Do you want to have more time to put towards the work you
              truly love and enjoy doing?
            </Text>
          </Box>
        </Flex>
      </Container>
      <Parallax translateY={[0, 0]} translateX={[75, -100]}>
        <Container maxW={"container.xl"} py={8}>
          <Heading as={"h1"} size={"4xl"} textAlign={"right"}>
            Web App Development
          </Heading>
        </Container>
      </Parallax>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <Flex justify={"flex-end"}>
          <Box w={["100%", "66.66%"]}>
            <Text>
              Running a business of any size often includes a lot of tedious
              requirements and boring processes that you have to do every day.
              Busy work can be necessary, but it doesn’t leave you with much
              time or energy to focus on what’s important or to do it well.
            </Text>
            <AspectRatio maxW={"100%"} ratio={4 / 3} mb={4}>
              <Image
                src={servicesImage}
                alt={"Web App Development | Software Development Services"}
                id={"consulting"}
                style={{ objectFit: "cover", scrollMarginTop: "8rem" }}
              />
            </AspectRatio>
            <Heading>What is Web App Development?</Heading>
            <Text>
              Web app development allows you to run these processes while you
              sleep. Your backend web development will acquire and manage
              customers for you. You will be able to sell merchandise and allow
              people to book your time with my e-commerce website development
              services. You can even interact with your existing customers via
              these web app development services while you slumber.
            </Text>
            <List mb={4}>
              {["CMS", "E-Commerce", "Help Desks", "CRM"].map((item) => (
                <ListItem key={item}>
                  <ListIcon as={RiCheckFill} />
                  {item}
                </ListItem>
              ))}
            </List>
            <Text>
              Now you can spend your waking hours doing the awesome work that
              you actually set out to do. This web app development company will
              handle making you money to support your business. It will get the
              word out to existing and new customers about the awesome work you
              are continuing to do. And, of course, you’ll build community,
              attract new audiences, and inspire great reviews and repeat
              customers.
            </Text>
          </Box>
        </Flex>
      </Container>
      <CTA />
    </>
  );
}
