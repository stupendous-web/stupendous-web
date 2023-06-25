import Head from "next/head";
import { useGlobal } from "../../lib/context";
import {
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Card,
} from "@chakra-ui/react";
import {
  RiEyeLine,
  RiShoppingCartLine,
  RiArticleLine,
  RiSearchLine,
} from "react-icons/ri";
import CTA from "../../components/CTA";
import { useEffect } from "react";

export default function WebAppDevelopment() {
  const { setIsLoading } = useGlobal();

  const cards = [
    { heading: "Brand Awareness", icon: <RiEyeLine size={32} /> },
    { heading: "E-Commerce", icon: <RiShoppingCartLine size={32} /> },
    { heading: "Publishing", icon: <RiArticleLine size={32} /> },
    { heading: "SEO", icon: <RiSearchLine size={32} /> },
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>
          Web Site Development | Software Development Services | Stupendous Web
        </title>
      </Head>
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                Web Site Development
              </Heading>
              <Text as={"code"}>
                You’ve got something to say whether it be about your products
                and services or some other important message you want to
                broadcast across the web and across the world. Your audience is
                ready to hear it! They’re interested in your work, what you do,
                and the value of your product.{" "}
                <Text as={"span"} className={"flash"}>
                  ▌
                </Text>
              </Text>
            </Card>
          </GridItem>
          <GridItem colSpan={[8, 5]}>
            <SimpleGrid columns={5} spacing={2}>
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Text>
                    Being heard in the wake of all the noise is difficult.
                    Getting your message to those who need to hear it most can
                    be hard.
                  </Text>
                  <Heading>The Importance of Web Site Development</Heading>
                  <Text>
                    Strong and impactful web design and development will help
                    you stand out amidst the crowd. You can highlight your work
                    and your message visually and even interactively with strong
                    web site development. A clear website can get your message
                    to those who need to hear it. A functional website can keep
                    your work financially stable. Web site development keeps you
                    and your work accessible, interesting, engaging, and simply
                    stunning. A website gives your brand authority and value.
                    Your customers are on Google right now searching for you.
                    Let’s give them something to land on with some solid web
                    development services.
                  </Text>
                </Card>
              </GridItem>
              {cards.map((card) => (
                <GridItem
                  key={card.heading}
                  colSpan={[5, 1]}
                  h={["100%", "200px"]}
                >
                  <Card>
                    <Flex
                      direction={"column"}
                      justify={"space-between"}
                      h={"100%"}
                    >
                      <Heading as={"h3"} fontSize={"1rem"} mb={4}>
                        {card.heading}
                      </Heading>
                      {card.icon}
                    </Flex>
                  </Card>
                </GridItem>
              ))}
              <GridItem colSpan={5}>
                <Card variant={"transparent"}>
                  <Text>
                    Web site development helps make you, your product, and your
                    messaging unique and valuable. An easy-to-digest website
                    will even help your followers find your valuable product
                    faster. Keeping your site accessible means anyone can access
                    it expanding your reach. Keeping your site beautiful,
                    engaging, and memorable will expand your reach even more.
                    Web sites help you and your clients and keep your work
                    sustainable. Not to mention ecommerce website development
                    will keep you making money even while you sleep. Add value
                    to your existing website or create something new and amazing
                    with my freelance web development services.
                  </Text>
                </Card>
              </GridItem>
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Container>

      <CTA />
    </>
  );
}
