import Head from "next/head";
import { useGlobal } from "../../lib/context";
import {
  Container,
  Heading,
  Text,
  GridItem,
  Card,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import {
  RiShoppingBagLine,
  RiPaintBrushLine,
  RiEqualizerLine,
  RiShareLine,
  RiCoinLine,
} from "react-icons/ri";
import CTA from "../../components/CTA";
import { useEffect } from "react";

export default function WebAppDevelopment() {
  const { setIsLoading } = useGlobal();

  const cards = [
    { heading: "iOS & Android Stores", icon: <RiShoppingBagLine size={32} /> },
    { heading: "Beautiful", icon: <RiPaintBrushLine size={32} /> },
    { heading: "Functional", icon: <RiEqualizerLine size={32} /> },
    { heading: "Sharable", icon: <RiShareLine size={32} /> },
    { heading: "Valuable", icon: <RiCoinLine size={32} /> },
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>
          iPhone App Development Services | Software Development Services |
          Stupendous Web
        </title>
      </Head>
      <Container maxW={"container.xl"} pt={[4, 16]}>
        <SimpleGrid columns={8} spacing={2}>
          <GridItem colSpan={[8, 3]}>
            <Card variant={"transparent"} pt={0}>
              <Heading as={"h1"} fontSize={["2rem", "4rem"]}>
                iPhone App Development Services
              </Heading>
              <Text as={"code"}>
                You have a brilliant idea for the next greatest iPhone and
                Android app. Now you’re probably wondering how to build your
                app, market your app to the people who need and want it, and be
                successful with it!{" "}
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
                    The technical and even marketing aspects of your new
                    invention can be challenging. Let’s face it; no one likes a
                    malfunctioning app that they don’t even need. So, it’s
                    important to build your new app with my iOS app development
                    services in a way that will add value to your customers’
                    lives and is easy to use.
                  </Text>
                  <Heading>Apps People Love</Heading>
                  <Text>
                    Let’s make something so awesome people want to buy two, one
                    for themselves and one for their friends. With my iPhone app
                    development services, we’ll build your brilliant new phone
                    app and make it fun and functional so people love it and
                    find it valuable, so valuable they want to share it with
                    friends and family! First, as part of my iOS development
                    services, we’ll review your app idea, its strengths, and its
                    weaknesses. Next, we’ll strategize a plan for getting your
                    app to market. Then, as part of my iPhone and Android app
                    development services, we’ll design and develop you a phone
                    app that works on both operating systems.
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
                    Yes! They’ll give you money for it! Quality iPhone app
                    development services and haivng your app designed and
                    developed by talented, educated, and experienced developers
                    like me provides you with a product that people want to use,
                    don’t struggle to use, and find so valuable they’ll tell
                    everyone about. In my iPhone and Android application
                    development services, we’ll make sure your app has an
                    outstanding and intuitive design, has flawless
                    functionality, is fun, is easy to share, and solves problems
                    for your customers, making you money and keeping your idea
                    sustainable.
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
