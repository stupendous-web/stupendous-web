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
          Web Site Development | Software Development Services | Stupendous Web
        </title>
      </Head>
      <Container maxW={"container.xl"} pt={32} pb={8}>
        <Flex direction={["column", "row"]} align={"center"}>
          <Box w={["100%", "33.33%"]} pr={4} mb={[8, 0]}>
            <Image
              src={isometric}
              alt={"Web Site Development | Software Development Services"}
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
          </Box>
          <Box w={["100%", "66.66%"]}>
            <Text as={"code"} color={"white"}>
              You’ve got something to say whether it be about your products and
              services or some other important message you want to broadcast
              across the web and across the world. Your audience is ready to
              hear it! They’re interested in your work, what you do, and the
              value of your product.{" "}
              <Text as={"span"} className={"flash"}>
                ▌
              </Text>
            </Text>
          </Box>
        </Flex>
      </Container>
      <Container maxW={"container.xl"} py={8}>
        <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
          Web Site Development
        </Heading>
      </Container>
      <Container maxW={"container.xl"} pt={8} pb={[16, 32]}>
        <Flex justify={"flex-end"}>
          <Box w={["100%", "66.66%"]}>
            <Text>
              Being heard in the wake of all the noise is difficult. Getting
              your message to those who need to hear it most can be hard.
            </Text>
            <Heading>The Importance of Web Site Development</Heading>
            <Text>
              Strong and impactful web design and development will help you
              stand out amidst the crowd. You can highlight your work and your
              message visually and even interactively with strong web site
              development. A clear website can get your message to those who
              need to hear it. A functional website can keep your work
              financially stable. Web site development keeps you and your work
              accessible, interesting, engaging, and simply stunning. A website
              gives your brand authority and value. Your customers are on Google
              right now searching for you. Let’s give them something to land on
              with some solid web development services.
            </Text>
            <List mb={4}>
              {["Brand Awareness", "E-Commerce", "Publishing", "SEO"].map(
                (item) => (
                  <ListItem key={item}>
                    <ListIcon as={RiCheckFill} />
                    {item}
                  </ListItem>
                )
              )}
            </List>
            <Text>
              Web site development helps make you, your product, and your
              messaging unique and valuable. An easy-to-digest website will even
              help your followers find your valuable product faster. Keeping
              your site accessible means anyone can access it expanding your
              reach. Keeping your site beautiful, engaging, and memorable will
              expand your reach even more. Web sites help you and your clients
              and keep your work sustainable. Not to mention ecommerce website
              development will keep you making money even while you sleep. Add
              value to your existing website or create something new and amazing
              with my freelance web development services.
            </Text>
          </Box>
        </Flex>
      </Container>
      <CTA />
    </>
  );
}
