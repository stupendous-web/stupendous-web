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
} from "@chakra-ui/react";
import { RiCheckFill } from "react-icons/ri";

import CTA from "../../components/CTA";

import isometric from "../../images/isometrics/isometric-2-1.png";

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
          <Box w={["100%", "33.33%"]} pr={4} mb={[8, 0]}>
            <Image
              src={isometric}
              alt={"Web App Development | Software Development Services"}
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
          </Box>
          <Box w={["100%", "66.66%"]}>
            <Text as={"code"} color={"white"}>
              Are you doing powerful and impactful work that you love and care
              about? Do you want to have more time to put towards the work you
              truly love and enjoy doing?{" "}
              <Text as={"span"} className={"flash"}>
                ▌
              </Text>
            </Text>
          </Box>
        </Flex>
      </Container>
      <Container maxW={"container.xl"} py={8}>
        <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
          Web App Development
        </Heading>
      </Container>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <Flex justify={"flex-end"}>
          <Box w={["100%", "66.66%"]}>
            <Text>
              Running a business of any size often includes a lot of tedious
              requirements and boring processes that you have to do every day.
              Busy work can be necessary, but it doesn’t leave you with much
              time or energy to focus on what’s important or to do it well.
            </Text>
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
