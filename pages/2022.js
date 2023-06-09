import Image from "next/image";
import Head from "next/head";
import NextLink from "next/link";
import { useGlobal } from "../lib/context";

import CTA from "../components/CTA";

import isometric from "../images/isometrics/isometric-2-1.png";
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  Link,
} from "@chakra-ui/react";

export default function Review2022() {
  const { setIsLoading } = useGlobal();

  return (
    <>
      <Head>
        <title>
          2022 Review | Software Development Services | Stupendous Web
        </title>
      </Head>
      <Container maxW={"container.xl"} pt={32} pb={8}>
        <Flex direction={["column", "row"]} align={"center"}>
          <Box w={["100%", "33.33%"]} pr={4} mb={[8, 0]}>
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
              A
            </Text>
            <Text as={"span"} fontFamily={"mono"}>
              t the end of every year I try my best with various tools and
              methods to assess who I am and my values to better serve myself,
              my communities, and my clients. Here are some conclusions I drew
              from 2022.
            </Text>
          </Box>
        </Flex>
      </Container>
      <Container maxW={"container.xl"} py={8}>
        <Heading as={"h1"} fontSize={["4rem", "12rem"]}>
          2022
        </Heading>
      </Container>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <Flex justify={"flex-end"}>
          <Box w={["100%", "66.66%"]}>
            <List mb={4} __css={{ columns: 1 }}>
              <ListItem py={2}>🤝 6 amazing new clients</ListItem>
              <ListItem py={2}>☕ ~1,095 cups of coffee</ListItem>
            </List>
            <Text mb={4}>
              I ask all my clients what their values are because I think it
              comes up in what all of us do. According to{" "}
              <Link
                as={NextLink}
                href={"https://personalvalu.es"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                this test
              </Link>{" "}
              at the end of 2022 I valued{" "}
              <i>
                meaningful work, tolerance, equality, creativity, and
                authenticity
              </i>
              . Building software makes me happy but when I build something
              meaningful to someone it gives me true happiness. Building
              meaningful web and phone apps helps my clients create a more
              diverse and tolerant world through inventiveness.
            </Text>
            <Text mb={4}>
              I&apos;m also a mediator, INFP, or at least according to{" "}
              <Link
                as={NextLink}
                href={"https://www.16personalities.com/"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                Meyer Briggs
              </Link>
              . I identify as someone who tends to be open-minded and creative
              while also taking care in what I do.
            </Text>
            <Text mb={4}>
              I love working with and connecting with people who want to see
              their values shine through their projects. My software development
              services are centered heavily around this. I&apos;d love to hear
              about what&apos;s driving you in this new year. We can also
              connect over music; follow me on{" "}
              <Link
                as={NextLink}
                href={
                  "https://open.spotify.com/user/128910259?si=49165d893098424f"
                }
                target={"_blank"}
                rel={"noreferrer"}
              >
                Spotify
              </Link>{" "}
              to see what I&apos;ve been listening to. Happy new year!
            </Text>
          </Box>
        </Flex>
      </Container>
      <CTA />
    </>
  );
}
