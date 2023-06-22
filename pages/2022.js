import Head from "next/head";
import NextLink from "next/link";
import { useGlobal } from "../lib/context";
import CTA from "../components/CTA";
import {
  Container,
  Heading,
  List,
  ListItem,
  Text,
  Link,
  GridItem,
  Card,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function Review2022() {
  const { setIsLoading } = useGlobal();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>
          2022 Review | Software Development Services | Stupendous Web
        </title>
      </Head>
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                2022
              </Heading>
              <Text as={"code"}>
                At the end of every year I try my best with various tools and
                methods to assess who I am and my values to better serve myself,
                my communities, and my clients. Here are some conclusions I drew
                from 2022.{" "}
                <Text as={"span"} className={"flash"}>
                  ▌
                </Text>
              </Text>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 5]}>
            <Card variant={"transparent"} pt={1}>
              <List mb={4}>
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
                their values shine through their projects. My software
                development services are centered heavily around this. I&apos;d
                love to hear about what&apos;s driving you in this new year. We
                can also connect over music; follow me on{" "}
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
            </Card>
          </GridItem>
        </SimpleGrid>
      </Container>
      <CTA />
    </>
  );
}
